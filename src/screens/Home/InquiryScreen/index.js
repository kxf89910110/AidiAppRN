import React, { Component } from 'react';
import view from './view';
import xgRequest from '../../../config/xgRequest';

export default class InquiryScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            doctorList: []
        }
    }

    componentDidMount() {
        this.getDoctorList();
    }

    async getDoctorList() {
        let cache = [];
        const res = await xgRequest.doctorList();
        for(let i of res) {
            if (i.id < 5)
            {
                cache.push(i);
            }
        }
        this.setState({ doctorList: cache });
    }

    render() {
        return view(this);
    }
}