import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    container: {
        padding: pxToDp(40),
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: pxToDp(30)
    },
    subtitle: {
        fontSize: pxToDp(34),
        marginTop: pxToDp(30)
    },
    content: {
        color: '#d7d7d7',
        paddingVertical: pxToDp(5)
    },
    footer: {
        width: '100%',
        height: pxToDp(300),
        position: 'absolute',
        bottom: 0
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
    btn: {
        flexDirection: 'row'
    }
})

export default styles;