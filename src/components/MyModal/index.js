import React, { Component } from 'react'
import $ from 'jquery'
import { Modal, Button } from 'antd';
import './mymodal.css'

export default class MyModal extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      visible: false,
      val: '',
      count: 2000,
      disabled: true,
      list: []
    };
    this.handleChange = this.handleChange.bind(this)
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleChange(e) {
    let val = e.target.value;
    var max_length = 2000;
    let length = val.length;

    // 如果为空 或者空格 不能发布
    let reg = /\s*/gi;
    let regval = val.replace(reg, "");
    if (regval.length === 0) {
      this.setState({
        disabled: true
      })
    } else {
      // 大于最大长度 截取
      if (length > max_length) {
        val = val.substring(0, max_length);
      }
      let count = max_length - length;
      this.setState({
        count: count,
        disabled: false
      })
    }
  }

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleOk = () => {
    this.setState({
      loading: true,
    })

    this.postMock();
    this.props.onHandleRefresh();

    setTimeout(() => {
      this.setState({
        loading: false,
        visible: false,
      });
      // window.location.href = "http://localhost:3000"
    }, 2000);
  };

  // 提交数据到mock
  postMock() {
    let author = "李四" + Math.ceil(Math.random() * 99);
    // mock数据不能传id
    var listObj = {
      author: author,
      time: new Date().getTime(),
      reading: 0,
      val: this.refs.listval.value
    }

    // 提交数据 mock
    // console.log(listObj)
    $.ajax({
      type: 'post',
      url: 'http://localhost:3001/list',
      data: listObj
    })
  }

  render() {
    const { visible, loading, disabled } = this.state;
    return (
      <div className="modalbtn">
        <Button
          type="primary"
          icon="edit"
          onClick={this.showModal}
        >
          新建
        </Button>
        <Modal
          className="mymodal"
          visible={visible}
          title="新动态发布"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="cancel" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" disabled={disabled} loading={loading} onClick={this.handleOk}>
              发布
            </Button>,
          ]}
        >
          <div className="modalbody">
            <textarea
              className="textval"
              onChange={this.handleChange}
              ref="listval"
              placeholder="撰写新动态..."
              maxLength="2000"
            >
            </textarea>
            <p><span className="count">{this.state.count}字</span></p>
          </div>
        </Modal>
      </div>
    );
  }
}
