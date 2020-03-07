import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    articleBox: {
        marginTop: pxToDp(10),
        paddingVertical: pxToDp(15),
        paddingHorizontal: pxToDp(10),
        backgroundColor: '#ffffff'
    },
    title: {
        fontWeight: 'bold',
        fontSize: pxToDp(25)
    },
    subtitle: {
        color: '#b7b7b7'
    },
    content: {
        fontSize: pxToDp(17),
        marginVertical: pxToDp(10)
    },
    card: {
        width: '100%', 
        height: pxToDp(170)
    },
    cardInfo: {
        color: '#b7b7b7',
        fontSize: pxToDp(19)
    },
    question: {
        color: '#6dacea',
        fontSize: pxToDp(17),
        paddingVertical: pxToDp(10),
        borderBottomWidth: pxToDp(1),
        borderBottomColor: '#f0f0f0'
    },
    answer: {
        fontSize: pxToDp(17),
        paddingVertical: pxToDp(10)
    },
    total: {
        fontSize: pxToDp(17)
    },
    warning: {
        color: '#b7b7b7',
        textAlign: 'center',
        paddingVertical: pxToDp(10),
        paddingHorizontal: pxToDp(80)
    }
})

export default styles;