import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    container: {
        padding: pxToDp(20),
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: pxToDp(15)
    },
    subtitle: {
        fontSize: pxToDp(17),
        marginTop: pxToDp(15)
    },
    content: {
        color: '#d7d7d7',
        paddingVertical: pxToDp(5)
    },
    footer: {
        width: '100%',
        height: pxToDp(150),
    },
    webView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    agree: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bottomBtnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default styles;