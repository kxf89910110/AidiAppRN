import React, { Component } from 'react';
import view from './view';
import xgRequest from '../../../config/xgRequest';

export default class PatientScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            patientList: []
        }
    }

    componentDidMount() {
        this.getPatientList();
    }

    async getPatientList() {
        const res = await xgRequest.patientList();
        this.setState({ patientList: res });
    }

    render() {
        return view(this);
    }
}