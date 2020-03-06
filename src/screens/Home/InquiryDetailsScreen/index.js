import React, { Component } from 'react';
import view from './view';
import xgRequest from '../../../config/xgRequest';

export default class InquiryDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            id: 1,
            details: {}
        }
    }

    componentDidMount() {
        this.getDoctorDetails();
    }

    async getDoctorDetails() {
        const res = await xgRequest.doctorDetails(this.state.id);
        this.setState({ details: res });
    }

    render() {
        return view(this);
    }
}