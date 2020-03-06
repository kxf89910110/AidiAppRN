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
        // 生产环境
        // const res = await xgRequest.enlist();
        // for(let i of res) {
        //     if (this.props.route.params.title === i.title) {
        //         this.setState({details: i});
        //     }
        // }
        const REQUEST_URL = 'https://www.aidi-sz.com/';
        try {
            let response = await fetch(
                REQUEST_URL + 'enlist.json',
                {
                method: 'GET'
                }
            );
            let responseJson = await response.json();
            for(let i of responseJson) {
                if (this.props.route.params.title === i.title) {
                    this.setState({details: i});
                }
            }
            return responseJson;
        } catch (error) {
            console.error(error);
        }
        
    }

    render() {
        return view(this);
    }
}