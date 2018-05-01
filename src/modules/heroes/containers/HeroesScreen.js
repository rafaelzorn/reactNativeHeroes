import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { fetchHeroes } from '../../../redux/actions'
import Hero from '../components/Hero'
import Styles from './styles/HeroesScreen'

class HeroesScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heroes: []
        }
    }

    componentDidMount() {
        this.props.fetchHeroes()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.heroes.length > 0) {
            this.setState({
                heroes: nextProps.heroes
            })
        }
    }
    
    render() {
        return (            
            <FlatList
                style={Styles.container}
                data={this.state.heroes}
                renderItem={({ item }) => (
                    <Hero data={item} navigation={this.props.navigation} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        )   
    }
}

const mapStateToProps = (state) => ({
    heroes: state.heroes.list    
})

export default connect(mapStateToProps, { fetchHeroes })(HeroesScreen)
