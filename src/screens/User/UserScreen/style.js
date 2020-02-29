import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formBox: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  formTitle: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  formText: {
    fontSize: 18
  },
  orderItem: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
