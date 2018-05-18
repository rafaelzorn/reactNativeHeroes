import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
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
        if (nextProps.heroes.length === 0 && nextProps.hasMore) {
            this.props.fetchHeroes(nextProps.search, nextProps.currentPage)
        }
    }

    moreHeroes = () => {
        if (this.props.hasMore) {            
            this.props.fetchHeroes(this.props.search, this.props.currentPage)
        }
    }

    render() {
        return (    
            <View style={Styles.container}>
                <Search />           
                
                {this.props.heroes.length === 0 && !this.props.hasMore ? 
                        <Warning message="OPS! No Heroes found." /> : null}

                { this.props.loading ? <Loading /> : 
                    <FlatList                               
                        data={this.props.heroes}
                        renderItem={({ item }) => (
                            <Hero data={item} navigation={this.props.navigation} />
                        )}  
                        keyExtractor={(item, index) => index.toString()}
                        onEndReached={this.moreHeroes}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={
                            this.props.hasMore ? 
                                <ActivityIndicator size="large" color="#ea4848" /> : null
                            }   
                    />}                    
            </View>
        )   
    }
}

const mapStateToProps = (state) => ({
    heroes: state.heroes.heroes,
    loading: state.heroes.loading,
    search: state.heroes.search,
    currentPage: state.heroes.currentPage,
    hasMore: state.heroes.hasMore
})

export default connect(mapStateToProps, { fetchHeroes })(HeroesScreen)
