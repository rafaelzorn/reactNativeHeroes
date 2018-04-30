import { StyleSheet, Dimensions } from 'react-native'
 
const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    item: {
        paddingBottom: 4,
    },
    itemImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: screen.height / 3
    },
    itemText: {
        color: '#fff',
        backgroundColor: 'transparent',
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        textShadowColor: '#222',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    itemTitle: {
        fontSize: 22,
    }
})

export default styles
