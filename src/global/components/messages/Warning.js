import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Styles from './styles/Warning'

const Warning = props => (
    <View style={Styles.container}>
        <Text style={Styles.text}>{props.message}</Text>
    </View>
)

Warning.propTypes = {
    message: PropTypes.string
}

export default Warning
