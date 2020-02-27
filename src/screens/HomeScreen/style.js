import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingHorizontal: 20,
    },
    searchInput: {
        marginTop: 15,
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabList: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabItem: {
        marginLeft: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    hotList: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
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