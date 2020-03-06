import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    container: {
        padding: pxToDp(10)
    },
    doctorCard: {
        backgroundColor: '#FFFFFF',
        paddingTop: pxToDp(20),
        paddingBottom: pxToDp(24),
        paddingHorizontal: pxToDp(25),
        borderRadius: pxToDp(4)
    },
    doctorCardHead: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    doctorCardAvatar: {
        width: pxToDp(64),
        height: pxToDp(64),
        borderRadius: pxToDp(100),
        marginRight: pxToDp(18)
    },
    doctorCardName: {
        fontSize: pxToDp(18),
        paddingRight: pxToDp(11)
    },
    doctorCardPrompt: {
        color: '#B7B7B7',
        fontSize: pxToDp(14)
    },
    doctorCardIntro: {
        fontSize: pxToDp(14),
        lineHeight: pxToDp(25),
        paddingTop: pxToDp(19)
    },
    // 问诊服务详情卡片
    inquiryCard: {
        backgroundColor: '#FFFFFF',
        marginTop: pxToDp(10),
        paddingVertical: pxToDp(16),
        paddingHorizontal: pxToDp(25),
        borderRadius: pxToDp(4)
    },
    inquiryCardTitle: {
        fontSize: pxToDp(16),
        fontWeight: 'bold',
        paddingLeft: pxToDp(8),
        borderLeftColor: '#ED8506',
        borderLeftWidth: pxToDp(3)
    },
    inquiryCardHead: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: pxToDp(14)
    },
    inquiryCardIcon: {
        width: pxToDp(52),
        height: pxToDp(52),
        marginRight: pxToDp(22),
        marginBottom: pxToDp(7)
    },
    inquiryCardType: {
        fontWeight: 'bold',
        fontSize: pxToDp(16)
    },
    priceBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inquiryCardPrompt: {
        fontSize: pxToDp(12)
    },
    checklist: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: pxToDp(7)
    },
    checklistPrompt: {
        color: '#A7A7A7'
    },
    notes: {
        color: '#A7A7A7',
        textAlign: 'center',
        fontSize: pxToDp(14),
        marginVertical: pxToDp(19)
    },
    // 支付按钮
    footer: {
        width: '100%',
        padding: pxToDp(12),
        backgroundColor: '#FFFFFF'
    },
    payBtn: {
        height: pxToDp(41),
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: pxToDp(14),
        lineHeight: pxToDp(40),
        backgroundColor: '#ED8506',
        borderRadius: pxToDp(66)
    }
})

export default styles;