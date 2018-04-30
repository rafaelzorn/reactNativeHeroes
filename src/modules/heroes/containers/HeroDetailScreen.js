import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import Styles from './styles/HeroDetailScreen'

class HeroDetailScreen extends Component {
    constructor(props) {
        super(props)
        const { params } = this.props.navigation.state
        this.state = {
            data: params.data
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
            </ScrollView>
        )
    }
}

export default HeroDetailScreen
