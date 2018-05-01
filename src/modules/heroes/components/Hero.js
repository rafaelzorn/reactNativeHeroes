import React from 'react'
import { TouchableOpacity, ImageBackground, Text } from 'react-native'
import { formatHeroData } from '../utils/Heroes'
import Styles from './styles/Hero'

const Hero = props => {
    const navigation = props.navigation
    const data = formatHeroData(props.data)
	
    return (
		<TouchableOpacity 
			style={Styles.item}
			activeOpacity={0.7}
			onPress={() => navigation.navigate('HeroDetailScreen', { data })}
		>
			<ImageBackground style={Styles.itemImage} source={{ uri: data.thumbnail }}>
				<Text style={[Styles.itemText, Styles.itemTitle]}>{ data.name }</Text>
			</ImageBackground>
		</TouchableOpacity>
    )
}

export default Hero
