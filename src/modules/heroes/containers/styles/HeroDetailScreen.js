import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0a0a0a'
    },
    containerThumbnail: {        
        marginBottom: 10
    },
    thumbnail: {
        height: 248
    },
    containerName: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textName: {
        color: '#fff',
        fontSize: 19,
        fontWeight: '500',
        marginBottom: 20
    },
    containerDescription: {
        padding: 10
    },
    labelDescription: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    },
    textDescription: {
        color: '#d2d2d2',
        fontSize: 14,
        paddingTop: 10,
        lineHeight: 22
    }
})

export default styles
