import React, { Component } from 'react';
import view from './view';
import xgRequest from '../../../config/xgRequest';

export default class InquiryGeneralScreen extends Component {
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
        const res = await xgRequest.doctorList();
        this.setState({ doctorList: res });
    }

    render() {
        return view(this);
    }
}