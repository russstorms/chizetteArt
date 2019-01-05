import React, { Component } from 'react'
import Sidebar from '../sidebar/sidebar'
import logo from './chizetteLogo.jpg'
import './header.css'


export default class header extends Component {

  secretLogin = (ev) => {
    ev.preventDefault()
    console.log(`Secret Login clicked!`)
  }

  render() {
    console.log(this.props)
    return (
      <div className="nav">
        <div className="logoAndTitle">
        <img className="logo" src={logo} alt="logo"></img><h1 className="chizetteArt"><b>chizette</b><span onClick={(ev) => this.secretLogin(ev)}>A</span>rt</h1>
        <Sidebar logoutClick={this.props.logoutClick} />
        </div>
      </div>
    )
  }
}