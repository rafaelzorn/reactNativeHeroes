import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import Styles from './styles/Loading'

const Loading = () => (
    <View style={Styles.container}>
        <ActivityIndicator size="large" color="#ea4848" />
    </View>
)

export default Loading
