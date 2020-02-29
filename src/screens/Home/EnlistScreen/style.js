import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    poster: {
        height: pxToDp(400)
    },
    tabBox: {
        height: pxToDp(120),
        backgroundColor: '#ffffff'
    },
    tab: {
        width: pxToDp(165),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        color: '#EE6915',
        fontSize: pxToDp(30),
        borderBottomWidth: 3,
        borderBottomColor: '#EE6915'
    },
    normal: {
        fontSize: pxToDp(30),
    },
    card: {
        backgroundColor: '#ffffff',
        height: pxToDp(250),
        padding: pxToDp(20),
        marginBottom: pxToDp(1),
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardImage: {
        width: pxToDp(200),
        height: pxToDp(200),
        marginRight: pxToDp(10)
    },
    cardContent: {
        width: '70%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardTitle: {
        fontSize: pxToDp(36)
    },
    cardInfo: {
        color: '#d7d7d7',
        fontSize: pxToDp(28),
    }
}) 

export default styles;