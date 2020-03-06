import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    defaultCard: {
        height: pxToDp(100),
        backgroundColor: '#CAAD99',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: pxToDp(0.5),
        paddingHorizontal: pxToDp(20)
    },
    patientCard: {
        height: pxToDp(100),
        backgroundColor: '#F0F0F0',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: pxToDp(0.5),
        paddingHorizontal: pxToDp(20)
    },
    head: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    name: {
        color: '#B7B7B7',
        fontSize: pxToDp(14),
        paddingRight: pxToDp(10)
    },
    defaultName: {
        color: '#FFFFFF',
        fontSize: pxToDp(14),
        paddingRight: pxToDp(10)
    },
    age: {
        color: '#B7B7B7',
        fontSize: pxToDp(12),
        paddingLeft: pxToDp(10)
    },
    defaultAge: {
        color: '#FFFFFF',
        fontSize: pxToDp(12),
        paddingLeft: pxToDp(10)
    },
    normalFont: {
        color: '#B7B7B7',
        fontSize: pxToDp(12)
    },
    defaultFont: {
        color: '#FFFFFF',
        fontSize: pxToDp(12)
    },
    footer: {
        marginTop: pxToDp(5),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // 备注
    prompt: {
        color: '#B7B7B7',
        textAlign: 'center',
        fontSize: pxToDp(14),
        paddingTop: pxToDp(14)
    }
})

export default styles;