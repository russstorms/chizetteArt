import React, { Component } from 'react'
import Sidebar from '../sidebar/sidebar'
import ComposeArt from '../create-art/createart'
import logo from './chizetteLogo.jpg'
import './header.css'


export default class header extends Component {

  secretLogin = (ev) => {
    ev.preventDefault()
    return this.props.toggleLoginForm()
  }

  render() {
    return (
      <div className="nav">
        <div className="logoAndTitle">
          <a href="/chizetteart">
            <img className="logo" src={logo} alt="logo"></img><h1 className="chizetteArt"><b>chizette</b><span onClick={(ev) => this.secretLogin(ev)}>A</span>rt</h1>
          </a>
            <Sidebar logoutClick={this.props.logoutClick} token={this.props.token} postArt={this.props.postArt} />
            {this.props.token ? <ComposeArt postArt={this.props.postArt} /> : null}
        </div>
      </div>
    )
  }
}