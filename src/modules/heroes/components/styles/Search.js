import { StyleSheet, PixelRatio } from 'react-native'

const styles = StyleSheet.create({   
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f8f8f8'        
    },
    btnSearch: {
        justifyContent: 'center',
        paddingLeft: 10,
        backgroundColor: '#fff'
    },
    btnClear: {
        justifyContent: 'center',
        paddingRight: 10,
        backgroundColor: '#fff'
    },
    inputSearch: {
        flex: 1
    },
    input: {
        fontSize: PixelRatio.get() >= 3 ? 20 : 18,
        fontWeight: '400',
        textAlign: 'left',
        marginVertical: 1,
        padding: 20,
        color: '#5d5d5d',
        backgroundColor: '#fff'
    }
})

export default styles
