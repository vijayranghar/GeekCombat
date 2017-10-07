import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import Home from './home.js'
import Dashboard from './dashboard.js'
import Predict from './predict.js'
import Score from './score.js'
import History from './history.js'

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import './style.scss'
class App extends Component {

  render () {
    return (
      <div>
      </div>
    )
  }
}

ReactDOM.render((
  <Router history = {browserHistory}>
         <Route path = "/" component = {Home} />
         <Route path = "/dashboard" component = {Dashboard} />
         <Route path = "/predict" component = {Predict} />
         <Route path = "/score" component = {Score} />
         <Route path = "/score" component = {Score} />
         <Route path = "/history" component = {History} />
   </Router>
), document.getElementById("App"))
