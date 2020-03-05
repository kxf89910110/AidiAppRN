import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    poster: {
        width: '100%',
        height: pxToDp(208)
    },
    // 问诊卡片
    inquiryCard: {
        height: pxToDp(117),
        backgroundColor: '#FFFFFF',
        borderRadius: pxToDp (4),
        paddingVertical: pxToDp(15),
        paddingHorizontal: pxToDp(15),
        marginHorizontal: pxToDp(15),
        marginBottom: pxToDp(17)
    },
    inquiryContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inquiryIcon: {
        width: pxToDp(52),
        height: pxToDp(52)
    },
    inquiryType: {
        fontSize: pxToDp(18)
    },
    inquiryPrompt: {
        color: '#BEBEBE',
        fontSize: pxToDp(12)
    },
    inquiryPrice: {
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    discount: {
        width: pxToDp(41),
        color: '#FFFFFF',
        fontSize: pxToDp(8),
        textAlign: 'center',
        backgroundColor: '#E52522'
    },
    priceBox: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    currentPrice: {
        color: '#ED8506',
        fontSize: pxToDp(18),
        marginRight: pxToDp(5)
    },
    originalPrice: {
        color: '#A7A7A7',
        fontSize: pxToDp(12),
        textDecorationLine: 'line-through'
    },
    inquiryFooter: {
        color: '#BEBEBE',
        fontSize: pxToDp(12),
        marginTop: pxToDp(8),
        textAlign: 'right'
    },
    // 医生卡片列表
    doctorHead: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: pxToDp(15)
    },
    doctorTitle: {
        fontSize: pxToDp(18),
        fontWeight: 'bold',
        paddingLeft: pxToDp(9),
        borderLeftColor: '#ED8506',
        borderLeftWidth: pxToDp(4)
    },
    doctorSubtitle: {
        color: '#BEBEBE',
        fontSize: pxToDp(12)
    },
    doctorCard: {
        width: pxToDp(167),
        backgroundColor: '#FFFFFF',
        paddingVertical: pxToDp(10),
        paddingHorizontal: pxToDp(15),
        marginTop: pxToDp(11),
        marginLeft: pxToDp(10)
    },
    doctorCardHead: {
        flexDirection: 'row'
    },
    doctorAvatar: {
        width: pxToDp(60),
        height: pxToDp(60),
        borderRadius: pxToDp(100),
        marginRight: pxToDp(12),
        marginBottom: pxToDp(8)
    },
    doctorName: {
        fontSize: pxToDp(16)
    },
    doctorNormal: {
        fontSize: pxToDp(12)
    }
})

export default styles;