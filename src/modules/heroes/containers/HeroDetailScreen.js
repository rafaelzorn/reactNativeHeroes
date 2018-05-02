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
        this.state = {
            isLoadingComics: true
        }
    }

    componentDidMount() {
        this.props.fetchHeroComics(this.props.navigation.state.params.data.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.comics.length > 0) {
            this.setState({
                isLoadingComics: false
            })
        }
    }

    render() {    
        const data = this.props.navigation.state.params.data

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
                
                {this.state.isLoadingComics ? <Loading message="Loading comics..." /> :
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
                }
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    comics: state.heroes.comics    
})

export default connect(mapStateToProps, { fetchHeroComics })(HeroDetailScreen)
