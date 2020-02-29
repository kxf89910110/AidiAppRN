import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: '#ffffff'
    },
    textInput: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    title: {
        fontSize: 20
    },
    input: {
        fontSize: 20,
        textAlign: 'right'
    },
    picker: {
        minHeight: 20, 
        minWidth: 80
    },
    registerBtn: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F08605',
        marginTop: 200
    },
    btnTitle: {
        color: '#ffffff',
        fontSize: 18
    }
})

export default styles;