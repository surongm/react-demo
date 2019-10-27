import React, { Component } from 'react'
import Not from './404.jpg'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <img src={Not} alt="404" style={{width: '100%', height: '100%'}}/>
      </div>
    )
  }
}
