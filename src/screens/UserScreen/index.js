import React, { Component } from 'react';
import view from './view.js';

export default class UserScreen extends Component {
    static navigationOptions = {
        title: '个人中心'
    };

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
}