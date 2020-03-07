import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    poster: {
        height: pxToDp(180),
        marginBottom: pxToDp(10)
    },
    li: {
        height: pxToDp(120),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: pxToDp(0.5),
        borderBottomColor: '#F0F0F0'
    },
    productImage: {
        width: pxToDp(100),
        height: pxToDp(100),
        marginHorizontal: pxToDp(15)
    },
    title: {
        color: '#101010',
        fontSize: pxToDp(18),
        fontWeight: 'bold'
    },
    prompt: {
        color: '#AAAAAA',
        fontSize: pxToDp(13)
    },
    unit: {
        width: pxToDp(75),
        color: '#AAAAAA',
        textAlign: 'center',
        backgroundColor: 'rgb(242, 242, 242)',
        marginVertical: pxToDp(5)
    },
    footer: {
        width: '65%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    price: {
        color: '#FF5F00',
        fontSize: pxToDp(20)
    },
    numBox: {
        flexDirection: 'row'
    },
    inventory: {
        color: '#AAAAAA',
        fontSize: pxToDp(15),
        paddingRight: pxToDp(5)
    }
})

export default styles;