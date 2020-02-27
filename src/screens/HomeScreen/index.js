import React, { Component } from 'react';
import view from './view.js';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: '首页'
    };

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
}