import React, { Component } from 'react'
import Sidebar from '../sidebar/sidebar'
import logo from './chizetteLogo.jpg'
import './header.css'


export default class header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      secretLogIn: false
    }
  }

  secretLogin = (ev) => {
    ev.preventDefault()
    console.log(`Secret Login clicked!`)
    this.setState = ({
      ...this.state,
      secretLogIn: true
    })
    console.log(this.state)
    return this.props.getLoginForm
  }

  render() {
    return (
      <div className="nav">
        <div className="logoAndTitle">
        <img className="logo" src={logo} alt="logo"></img><h1 className="chizetteArt"><b>chizette</b><span onClick={(ev) => this.secretLogin(ev)}>A</span>rt</h1>
        <Sidebar logoutClick={this.props.logoutClick} token={this.props.token} />
        </div>
      </div>
    )
  }
}