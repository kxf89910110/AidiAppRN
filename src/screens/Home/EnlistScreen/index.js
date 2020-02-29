import React, { Component } from 'react';
import view from './view';

export default class EnlistScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            selected: 0,
            tabList: [{
                id: 0,
                title: "全部",
                box: []
              },
              {
                id: 1,
                title: "妇科",
                box: []
              },
              {
                id: 2,
                title: "消化道",
                box: []
              },
              {
                id: 3,
                title: "肺癌",
                box: []
              },
              {
                id: 4,
                title: "乳腺癌",
                box: []
              },
              {
                id: 5,
                title: "鼻咽癌",
                box: []
              },
              {
                id: 6,
                title: "泌尿",
                box: []
              },
              {
                id: 7,
                title: "实体瘤",
                box: []
              },
              {
                id: 8,
                title: "淋巴瘤",
                box: []
              }
            ],
            enlist: [],
            showList: [],
            refreshing: false
        }
    }

    componentDidMount() {
        this.getEnlist().then(() => this.changeTab('', 0));
    }

    // 获取招募数据
    async getEnlist() {
        const REQUEST_URL = 'https://www.aidi-sz.com/';
        try {
            let response = await fetch(
              REQUEST_URL + 'enlist.json',
              {
                method: 'GET'
              }
            );
            let responseJson = await response.json();
            this.setState({
                enlist: responseJson
            });
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    } 

    // 改变类目筛选数据
    changeTab(title, e) {
        let cache = [];
        for (let i of this.state.enlist)
        {
            if (title === i.cate) {
                cache.push(i);
            };
        };
        this.setState({
            selected: e,
            showList: e === 0 ? this.state.enlist: cache
        });
    }

    // 上拉刷新
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.getEnlist();
        const index = this.state.selected;
        const title = this.state.tabList[index].title;
        this.changeTab(title, index);
        this.setState({refreshing: false});
    }

    render() {
        return view(this);
    }
}