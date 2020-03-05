import React, { Component } from 'react';
import view from './view';

export default class InquiryGeneralScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return view(this);
    }
}