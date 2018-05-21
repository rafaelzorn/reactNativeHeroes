import { StackNavigator } from 'react-navigation'
import HeroesScreen from '../modules/heroes/containers/HeroesScreen'
import HeroDetailScreen from '../modules/heroes/containers/HeroDetailScreen'

export default StackNavigator({
    HeroesScreen: { screen: HeroesScreen },
    HeroDetailScreen: { screen: HeroDetailScreen }
}, {
    initialRouteName: 'HeroesScreen',
    headerMode: {
        visible: false
    }
})
