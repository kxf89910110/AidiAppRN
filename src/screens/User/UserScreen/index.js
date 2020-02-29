import React, { Component } from 'react';
import view from './view.js';

export default class UserScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
}