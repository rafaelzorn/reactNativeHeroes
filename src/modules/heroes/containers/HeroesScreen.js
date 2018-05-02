import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { fetchHeroes } from '../../../redux/actions'
import Hero from '../components/Hero'
import Loading from '../../../global/components/messages/Loading'
import Styles from '../../../global/styles/Container'

class HeroesScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.props.fetchHeroes()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.heroes.length > 0) {
            this.setState({
                isLoading: false
            })
        }
    }
    
    render() {
        return (    
            this.state.isLoading ? <Loading message="Loading heroes..." /> :
            <View style={Styles.container}>
                <FlatList                    
                    data={this.props.heroes}
                    renderItem={({ item }) => (
                        <Hero data={item} navigation={this.props.navigation} />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )   
    }
}

const mapStateToProps = (state) => ({
    heroes: state.heroes.list    
})

export default connect(mapStateToProps, { fetchHeroes })(HeroesScreen)
