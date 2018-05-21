import React, { Component } from 'react'
import { ScrollView, Text, View, Image, FlatList, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchHeroComics, reset } from '../../../redux/actions/HeroComics'
import Comic from '../components/Comic'
import { Warning } from '../../../global/components'
import Styles from './styles/HeroDetailScreen'

class HeroDetailScreen extends Component {
    constructor(props) {
        super(props)       
        const { params } = this.props.navigation.state
        this.state = {
            data: params
        }        
    }

    componentDidMount = () => { 
        this.props.reset()
        this.props.fetchHeroComics(this.state.data.id, 1)
    }

    moreComics = () => {
        if (this.props.hasMoreComics) {            
            this.props.fetchHeroComics(this.state.data.id, this.props.currentPage)
        }
    }

    renderComics = () => (
        <View style={Styles.padding10}>
            <Text style={[Styles.label, Styles.marginBottom10]}>Comics</Text>

            {this.props.comics.length === 0 && !this.props.hasMoreComics ? 
                        <Warning message="OPS! No Comics found." /> : null}

            <FlatList       
                horizontal                         
                data={this.props.comics}
                renderItem={({ item }) => (
                    <Comic data={item} />
                )}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={this.moreComics}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                    this.props.hasMoreComics ? 
                        <ActivityIndicator size="large" color="#ea4848" /> : null}
            />
        </View>
    )

    render() {    
        const data = this.state.data

        return (
            <ScrollView style={Styles.container}>
                <View style={Styles.marginBottom10}>
                    <Image style={Styles.thumbnail} source={{ uri: data.thumbnail }} />  
                </View>

                <View style={Styles.alignCenter}>
                    <Text style={Styles.name}>{ data.name }</Text>                    
                </View>
                
                <View style={Styles.padding10}>
                    <Text style={Styles.label}>Description</Text>
                    <Text style={Styles.text}>{ data.description }</Text>
                </View>

                {this.renderComics()}
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    comics: state.heroComics.comics,
    loading: state.heroComics.loading,
    currentPage: state.heroComics.currentPage,
    hasMoreComics: state.heroComics.hasMoreComics
})

HeroDetailScreen.propTypes = {
    reset: PropTypes.func,
    fetchHeroComics: PropTypes.func,
    comics: PropTypes.array,
    loading: PropTypes.bool,
    currentPage: PropTypes.number,
    hasMoreComics: PropTypes.bool
}

export default connect(mapStateToProps, { fetchHeroComics, reset })(HeroDetailScreen)
