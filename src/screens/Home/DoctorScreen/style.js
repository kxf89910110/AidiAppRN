import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';
const backImg = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/mingyitang/beijing.png';

const styles = StyleSheet.create({
    container: {
        padding: pxToDp(10)
    },
    card: {
        marginBottom: pxToDp(10),
        paddingHorizontal: pxToDp(25)
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    intro: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingTop: pxToDp(20)
    },
    name: {
        fontSize: pxToDp(17)
    },
    department: {
        fontSize: pxToDp(12),
        paddingLeft: pxToDp(7)
    },
    prompt: {
        color: '#B7B7B7',
        paddingTop: pxToDp(7)
    },
    avatar: {
        width: pxToDp(50),
        height: pxToDp(50)
    },
    expertise: {
        marginTop: pxToDp(20)
    },
    footer: {
        height: pxToDp(60),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    reading: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    readBtn: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderLeftWidth: pxToDp(0.5),
        borderLeftColor: '#F0F0F0'
    },
    readBtnText: {
        color: '#FFFFFF',
        width: pxToDp(100),
        height: pxToDp(30),
        textAlign: 'center',
        lineHeight: pxToDp(25),
        borderRadius: pxToDp(60),
        backgroundColor: '#ED8506'
    }
})

export default styles;