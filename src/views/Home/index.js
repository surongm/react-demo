import React, { Component } from 'react'
import {
    CardList,
    MyModal
} from '../../components'
import './home.css'

export default class Home extends Component {
    // 提交后页面刷新
    onHandleRefresh(){
        window.location.reload();
    }
    render() {
        return (
            <div className="home">
                <div className="top">
                    <MyModal 
                        onHandleRefresh={this.onHandleRefresh}
                    />
                </div>
                <div className="main">
                    <CardList />
                </div>
            </div>
        )
    }
}
