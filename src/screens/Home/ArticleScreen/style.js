import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    articleBox: {
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    subtitle: {
        color: '#b7b7b7'
    },
    content: {
        fontSize: 17,
        marginVertical: 10
    },
    card: {
        width: '100%', 
        minHeight: 170
    },
    cardInfo: {
        color: '#b7b7b7',
        fontSize: 19
    },
    question: {
        color: '#6dacea',
        fontSize: 17,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#f0f0f0'
    },
    answer: {
        fontSize: 17,
        paddingVertical: 10
    },
    total: {
        fontSize: 17
    },
    warning: {
        color: '#b7b7b7',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 80
    }
})

export default styles;