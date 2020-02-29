import React, { Component } from 'react';
import data from '../../../config/article.js'
import view from './view.js';

export default  class ArticleScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            article: {}
        }
    }

    componentDidMount() {
        for(let li of data.list) {
            if (li.title === this.props.route.params.title) {
                this.setState({
                    article: li
                });
            };
        };
    }

    render() {
        return view(this);
    }
}