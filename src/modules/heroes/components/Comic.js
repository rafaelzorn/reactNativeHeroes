import React from 'react'
import {
    Image,
	View
} from 'react-native'
import Styles from './styles/Comic'
import { formatComicData } from '../utils/Comics'

const Comic = props => {
    const data = formatComicData(props.data)
    
    return (
        <View style={Styles.cardContainer}>
            <Image source={{ uri: data.thumbnail }} style={Styles.cardImage} />
        </View>
    )
}

export default Comic
