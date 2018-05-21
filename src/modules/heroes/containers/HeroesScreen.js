import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchHeroes } from '../../../redux/actions/Heroes'
import Hero from '../components/Hero'
import { Loading, Warning } from '../../../global/components'
import Search from '../components/Search'
import Styles from './styles/HeroesScreen'

class HeroesScreen extends Component {
    
    componentDidMount = () => {
        this.props.fetchHeroes(undefined, this.props.currentPage)
    }
    
    componentWillReceiveProps = nextProps => { 
        if (nextProps.heroes.length === 0 && nextProps.hasMoreHeroes) {
            this.props.fetchHeroes(nextProps.search, nextProps.currentPage)
        }
    }

    moreHeroes = () => {
        if (this.props.hasMoreHeroes) {            
            this.props.fetchHeroes(this.props.search, this.props.currentPage)
        }
    }

    render() {
        return (    
            <View style={Styles.container}>
                <Search />           
                
                {this.props.heroes.length === 0 && !this.props.hasMoreHeroes ? 
                        <Warning message="OPS! No Heroes found." /> : null}

                {this.props.loading ? <Loading /> : 
                    <FlatList                               
                        data={this.props.heroes}
                        renderItem={({ item }) => (
                            <Hero data={item} navigation={this.props.navigation} />
                        )}  
                        keyExtractor={(item, index) => index.toString()}
                        onEndReached={this.moreHeroes}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={
                            this.props.hasMoreHeroes ? 
                                <ActivityIndicator size="large" color="#ea4848" /> : null}   
                    /> }                    
            </View>
        )   
    }
}

HeroesScreen.propTypes = {
    fetchHeroes: PropTypes.func,
    heroes: PropTypes.array,
    loading: PropTypes.bool,
    search: PropTypes.string,
    currentPage: PropTypes.number,
    hasMoreHeroes: PropTypes.bool
}

const mapStateToProps = state => ({
    heroes: state.heroes.heroes,
    loading: state.heroes.loading,
    search: state.heroes.search,
    currentPage: state.heroes.currentPage,
    hasMoreHeroes: state.heroes.hasMoreHeroes
})

export default connect(mapStateToProps, { fetchHeroes })(HeroesScreen)
