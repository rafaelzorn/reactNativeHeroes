import React from 'react'
import { Image, View } from 'react-native'
import { formatComicData } from '../../comics/utils/Comics'
import Styles from './styles/Comic'

const Comic = props => {
    const data = formatComicData(props.data)
    
    return (
        <View style={Styles.container}>
            <Image source={{ uri: data.thumbnail }} style={Styles.thumbnail} />
        </View>
    )
}

export default Comic
