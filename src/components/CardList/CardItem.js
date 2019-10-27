import React, { Component } from 'react'
import './card.css'

export default class CardItem extends Component {
    constructor() {
        super();
        this.state = {
            flagval: ""
        }
        this.handleClickFlag = this.handleClickFlag.bind(this)
        this.handleClickId = this.handleClickId.bind(this)
    }
    componentDidMount() {
        this.isFlag();
    }

    // 判断是否 继续阅读
    isFlag(){
        const { item } = this.props;
        let flagval = item.val;
        let flag = this.refs.flag;
        if (item.val.length > 150) {
            flag.innerHTML = "继续阅读"
            flagval = item.val.substring(0, 150);           
        }
        this.setState({
            flagval: flagval
        })
    }

    // 切换 继续阅读 收起
    handleClickFlag() {
        const { item } = this.props;
        let flagval = item.val;
        let flag = this.refs.flag;
        if (flag.innerHTML === "继续阅读") {
            flag.innerHTML = "收起"
        } else {
            flag.innerHTML = "继续阅读"
            flagval = item.val.substring(0, 150);   
        }
        this.setState({
            flagval: flagval
        })
    }

    // 往父组件传id
    handleClickId(){
        const { item } = this.props;
        this.props.onReadAdd(item.id)
    }

    render() {
        const { item } = this.props;
        return (
            <div 
                className="usercard"
                onClick={this.handleClickId}
            >
                <div className="headimage">
                    <img alt="默认头像" src={require('./headimage.jpg')} />
                </div>
                <div className="content">
                    <div className="author">
                        {item.author}
                    </div>
                    <div className="description">
                        <span className="time">
                            {item.time}
                        </span>
                        <span className="reading">
                            阅读({item.reading})
                        </span>
                    </div>
                    <div className="val">
                        {/* 实现换行 */}
                        <span dangerouslySetInnerHTML={{ __html: this.state.flagval}}></span>
                        {/* {this.state.flagval} */}
                        <span 
                            className="valflag" 
                            ref="flag" 
                            onClick={this.handleClickFlag}
                        >
                        </span>
                    </div>
                </div>
            </div>

        )
    }
}
