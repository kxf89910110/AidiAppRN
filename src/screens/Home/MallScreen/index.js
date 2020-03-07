import React, { Component } from 'react';
import view from './view';
import xgRequest from '../../../config/xgRequest';

export default class MallScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            productList: []
        }
    }

    async componentDidMount() {
        const res = await xgRequest.productList();
        this.setState({ productList: res });
    }

    render() {
        return view(this);
    }
}