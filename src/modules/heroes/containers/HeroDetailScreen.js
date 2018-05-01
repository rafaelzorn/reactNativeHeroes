import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import Styles from './styles/HeroDetailScreen'
import { connect } from 'react-redux'
import { fetchHeroComics } from '../../../redux/actions'
import Comic from '../components/Comic'

class HeroDetailScreen extends Component {
    constructor(props) {
        super(props)
        const { params } = this.props.navigation.state
        this.state = {
            data: params.data,
            comics: []
        }
    }

    componentDidMount() {
        this.props.fetchHeroComics(this.state.data.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.comics.length > 0) {
            this.setState({
                heroes: nextProps.heroes,
                comics: nextProps.comics
            })
        }
    }

    render() {
        const data = this.state.data
        
        return (
            <ScrollView style={Styles.container}>
                <View style={Styles.containerThumbnail}>
                    <Image
                        style={Styles.thumbnail}
                        source={{ uri: data.thumbnail }}
                    />   
                </View>

                <View style={Styles.containerName}>
                    <Text style={Styles.textName}>{ data.name }</Text>                    
                </View>

                <View style={Styles.containerDescription}>
                    <Text style={Styles.labelDescription}>Description</Text>
                    <Text style={Styles.textDescription}>{ data.description }</Text>
                </View>

                <View style={Styles.containerComics}>
                    <Text style={Styles.labelComics}>Comics</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {this.state.comics.map(comic => (
                            <Comic key={comic.id} data={comic} />
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    comics: state.heroes.comics    
})

export default connect(mapStateToProps, { fetchHeroComics })(HeroDetailScreen)
