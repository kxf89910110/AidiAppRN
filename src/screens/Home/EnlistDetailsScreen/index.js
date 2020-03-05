import React, { Component } from 'react';
import view from './view';
import xgRequest from '../../../config/xgRequest';

export default class EnlistDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            details: {}
        }
    }

    async componentDidMount() {
        const res = await xgRequest.enlist();
        for(let i of res) {
            if (this.props.route.params.title === i.title) {
                this.setState({details: i});
            }
        }
    }

    render() {
        return view(this);
    }
}