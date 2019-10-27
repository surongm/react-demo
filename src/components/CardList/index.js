import React, { Component } from 'react'
import $ from 'jquery'
import moment from 'moment';
import CardItem from './CardItem'

export default class CardList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        this.ChangeList();
    }

    // list列表 逆序 修改为标准时间
    ChangeList() {
        let listdata = this.ajaxRequst();
        listdata.reverse();
        for (var i = 0; i < listdata.length; i++) {
            let reg = /\n|\r\n|↵/g;
            listdata[i].val = listdata[i].val.replace(reg, "<br/>");
            listdata[i].time = this.getLocalTime(listdata[i].time)
        }
        this.setState({
            list: [...listdata]
        })
    }

    // 请求mock数据
    ajaxRequst() {
        var obj = [];
        $.ajax({
            url: 'http://localhost:3001/list',
            dataType: 'json',
            type: 'get',
            async: false,
            success: (data) => {
                obj = data;
            },
            error: (err) => {
                console.log(err)
            }
        })
        return obj;
    }

    // 点击阅读量加1
    onReadAdd = (id) => {
        this.setState({
            list: this.state.list.map(item => {
                if (item.id === id) {
                    item.reading = Number(item.reading) + 1
                }
                return item
            })
        })
    }

    // 时间戳转化为标准时间
    getLocalTime(nS) {
        return moment(parseInt(nS)).format("YYYY-MM-DD HH:mm:ss")
    }

    render() {
        const { list } = this.state;
        return (
            <ul className="ullist">
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}>
                                <CardItem 
                                    item={item}
                                    onReadAdd={this.onReadAdd}
                                />
                            </li>
                        )
                    }
                    )}
            </ul>
        )
    }
}
