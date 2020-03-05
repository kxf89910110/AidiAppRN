import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    poster: {
        height: pxToDp(125)
    },
    // 医生列表
    card: {
        backgroundColor: '#FFFFFF',
        marginTop: pxToDp(10),
        marginHorizontal: pxToDp(8),
        paddingTop: pxToDp(20),
        paddingBottom: pxToDp(15),
        paddingHorizontal: pxToDp(25)
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: pxToDp(64),
        height: pxToDp(64),
        borderRadius: pxToDp(100),
        marginRight: pxToDp(18)
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: pxToDp(18),
        paddingRight: pxToDp(11)
    },
    subtitle: {
        fontSize: pxToDp(14)
    },
    prompt: {
        color: '#B7B7B7',
        fontSize: pxToDp(14)
    },
    intro: {
        fontSize: pxToDp(14),
        lineHeight: pxToDp(20),
        marginTop: pxToDp(19),
        paddingBottom: pxToDp(8),
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: pxToDp(0.5)
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: pxToDp(9)
    },
    price: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    current: {
        color: '#ED8506',
        fontSize: pxToDp(18)
    },
    original: {
        color: '#B7B7B7',
        fontSize: pxToDp(12),
        marginLeft: pxToDp(3),
        textDecorationLine: 'line-through'
    },
    btn: {
        width: pxToDp(72),
        height: pxToDp(30),
        backgroundColor: '#ED8506',
        borderRadius: pxToDp(66),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTitle: {
        color: '#FFFFFF'
    }
})

export default styles;