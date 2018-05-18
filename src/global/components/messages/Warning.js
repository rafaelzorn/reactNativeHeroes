import React from 'react'
import { View, Text } from 'react-native'
import Styles from './styles/Warning'

const Warning = props => (
    <View style={Styles.container}>
        <Text style={Styles.text}>{props.message}</Text>
    </View>
)

export default Warning
