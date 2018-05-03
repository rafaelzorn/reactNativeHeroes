import React, { Component } from 'react'
import { ScrollView, FlatList, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { fetchHeroComics } from '../../../redux/actions'
import Comic from '../components/Comic'
import Loading from '../../../global/components/messages/Loading'
import Styles from './styles/HeroDetailScreen'

class HeroDetailScreen extends Component {
    constructor(props) {
        super(props)       
        const { params } = this.props.navigation.state
        this.state = {
            data: params.data,
            comics: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.props.fetchHeroComics(this.state.data.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.comics.length > 0 || nextProps.comics.length === 0) {
            this.setState({
                comics: nextProps.comics,
                isLoading: false         
            })
        }
    }

    renderComics = () => {
        if (this.state.isLoading && this.state.data.comics.length > 0) {
            return <Loading message="Loading comics..." />
        }

        if (this.state.comics.length > 0) {
            return (
                <View style={Styles.padding10}>
                    <Text style={[Styles.label, Styles.marginBottom10]}>Comics</Text>
                    <FlatList 
                        horizontal                 
                        data={this.props.comics}
                        renderItem={({ item }) => (
                            <Comic data={item} />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            )
        }
    }
    
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

const mapStateToProps = (state) => ({
    comics: state.heroes.comics    
})

export default connect(mapStateToProps, { fetchHeroComics })(HeroDetailScreen)
