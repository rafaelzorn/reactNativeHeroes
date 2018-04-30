import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import { fetchHeroes } from '../../../redux/actions'
import { Hero } from '../components/Hero'
import Styles from './styles/HeroesScreen'

class HeroesScreen extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id })
        this.state = {
            dataSource: ds.cloneWithRows(this.props.heroes)
        }
    }

    componentDidMount() {
        this.props.fetchHeroes()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.heroes.length > 0) {
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id })
            this.setState({
                dataSource: ds.cloneWithRows(nextProps.heroes)
            })
        }
    }
    
    render() {
        return (
			<ListView
                style={Styles.container}
				dataSource={this.state.dataSource}
				renderRow={(data) => <Hero data={data} navigation={this.props.navigation} />}
				enableEmptySections
			/>
        )   
    }
}

const mapStateToProps = (state) => ({
    heroes: state.heroes.list    
})

export default connect(mapStateToProps, { fetchHeroes })(HeroesScreen)
