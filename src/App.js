import React, { Component } from 'react'
import { Route, BrowserRouter as Router, } from 'react-router-dom'
import {
  Home,
  NotFound
} from './views'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home}/>
          {/* <Route component={Home} path="/cardlist" /> */}
          <Route component={NotFound} path="/*" />
        </Router>
      </div>
    )
  }
}
