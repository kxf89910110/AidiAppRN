import { StyleSheet } from 'react-native';
import pxToDp from '../../../config/pxToDp';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingHorizontal: pxToDp(15),
        paddingVertical: pxToDp(7)
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header_left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    loginBtn: {
        width: pxToDp(78),
        height: pxToDp(24),
        color: '#ffffff',
        backgroundColor: '#ED8506',
        textAlign: 'center',
        fontSize: pxToDp(14),
        borderRadius: pxToDp(16)
    },
    welTitle: {
        color: '#9b9b9b',
        fontSize: pxToDp(14),
        marginLeft: pxToDp(10)
    },
    searchInput: {
        marginVertical: pxToDp(14),
        paddingVertical: pxToDp(5),
        paddingHorizontal: pxToDp(20),
        borderRadius: pxToDp(30),
        backgroundColor: '#F2F3F7',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchKey: {
        color: '#AEAEAE',
        fontSize: pxToDp(14)
    },
    // 标签
    tabList: {
        marginVertical: pxToDp(15)
    },
    tabItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    tabImg: {
        width: pxToDp(27),
        height: pxToDp(27)
    },
    tabTitle: {
        color: '#636363',
        marginTop: pxToDp(6)
    },
    // 肿瘤专栏
    title: {
        fontSize: pxToDp(16),
        fontWeight: 'bold',
        borderLeftWidth: pxToDp(3),
        borderLeftColor: '#ED8506',
        paddingLeft: pxToDp(5),
        marginVertical: pxToDp(14)
    },
    listBox: {
        backgroundColor: '#ffffff',
        paddingHorizontal: pxToDp(13)
    },
    hotListImg: {
        width: pxToDp(169),
        height: pxToDp(110),
        marginRight: pxToDp(9),
        marginBottom: pxToDp(9)
    },
    // 推荐阅读
    articleList: {
        width: '100%',
        padding: 10,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1
    },
    articleBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    articleBox2: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    articleTitle: {
        width: '60%',
        fontSize: 17,
        marginRight: 10
    },
    articleImage: {
        minWidth: 120, 
        minHeight: 60,
        borderRadius: 10
    },
    articleTab: {
        fontSize: 10,
        padding: 5,
        textAlign: 'right',
        color: '#8c8c8c',
        backgroundColor: '#EBEBEB'
    }
});

export default styles;