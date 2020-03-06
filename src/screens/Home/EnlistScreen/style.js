import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    poster: {
        height: pxToDp(170)
    },
    tabBox: {
        backgroundColor: '#ffffff'
    },
    tab: {
        width: pxToDp(80),
        height:  pxToDp(44),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        color: '#EE6915',
        fontSize: pxToDp(14),
        borderBottomWidth: 3,
        borderBottomColor: '#EE6915'
    },
    normal: {
        fontSize: pxToDp(14),
    },
    card: {
        backgroundColor: '#ffffff',
        padding: pxToDp(17),
        marginBottom: pxToDp(1),
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardImage: {
        width: pxToDp(100),
        height: pxToDp(100),
        marginRight: pxToDp(10)
    },
    cardContent: {
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardTitle: {
        fontSize: pxToDp(17)
    },
    star: {
        marginVertical: pxToDp(5),
        marginRight: pxToDp(5)
    },
    cardInfo: {
        color: '#d7d7d7',
        fontSize: pxToDp(14),
    }
}) 

export default styles;