import React, { Component } from 'react';
import { DatePickerAndroid, Alert } from 'react-native';
import view from './view.js';
import xgRequest from '../../../config/xgRequest.js';

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            avatar: 'https://facebook.github.io/react/logo-og.png',
            phone: 0,
            name: '',
            gender: 1,
            dateOfBirth: '',
            region: []
        }
    }

    componentDidMount() {
        let today = new Date();
        let year = today.getFullYear().toString();
        let month = (today.getMonth()+1).toString();
        let day = today.getDate().toString();
        this.setState({ date: (year + '-' + month + '-' + day) });
    }
    
    async showDatePicker() {
        try {
          const {action, year, month, day} = await DatePickerAndroid.open({
            date: new Date()
          });
          if (action !== DatePickerAndroid.dismissedAction) {
            this.setState({ date: (year + '-' + (month+1) + '-' + day) });
          }
        } catch ({code, message}) {
          console.warn('Cannot open date picker', message);
        }
    };
    
    async register() {
      const REQUEST_URL = 'https://www.aidi-sz.com/api/';
      const phoneLimit = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0135-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0135-9]\d{2}|6[2567]\d{2}|4(?:[14]0\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/;
      if (!(phoneLimit.test(this.state.phone))) {
        Alert.alert(
          '',
          '请输入正确的手机号',
          [
            {text: '确定', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      } else if (this.state.name === '') {
        Alert.alert(
          '',
          '姓名不能为空',
          [
            {text: '确定', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      } else {
        try {
          let response = await fetch(
            REQUEST_URL + 'baseinfo/registry',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/Json'
              },
              body: JSON.stringify({
                name: this.state.name,
                sex: this.state.gender,
                dateOfBirth: this.state.dateOfBirth,
                phone: this.state.phone,
                openid: "system_openid",
                role: "patient",
                slid: 'sys_slid',
                dtid: 'sys_dtid',
                province: this.state.region[0], //省s
                city: this.state.region[1], //市
              })
            }
          );
          let responseJson = await response.json();
          console.log(responseJson);
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }
    };

    render() {
        return view(this);
    }
}