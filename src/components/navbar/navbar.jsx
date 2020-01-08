import React, { Component } from 'react'
import Drawer from '../drawer/drawer'
import ComposeArt from '../create-art/createart'
import logo from './styles/chizetteLogo.jpg'
import './styles/navbar.css'


export default class header extends Component {

  // Admin — Login form
  secretLogin = (ev) => {
    ev.preventDefault()
    return this.props.toggleLoginForm()
  }

  render() {
    return (
      <div className="Navbar">
        <a className="anchorToHome" href="/">
          <img className="logo" src={logo} alt="logo"></img>
          <h1 className="chizetteArt">
            <strong className="chizette"><span className="c">c</span>
              <span className="h">h</span>
              <span className="i">i</span>
              <span className="z">z</span>
              <span className="e">e</span>
              <span className="t">t</span>
              <span className="t2">t</span>
              <span className="e2">e</span>
            </strong>
            <span className="A" onClick={(ev) => this.secretLogin(ev)}>A</span>
            <span className="r">r</span>
            <span className="t3">t</span>
          </h1>
        </a>
        <Drawer 
          filterArt={this.props.filterArt}
          toggleContactMe={this.props.toggleContactMe}
          contactMe={this.props.contactMe}
          logoutClick={this.props.logoutClick}
          token={this.props.token}
          postArt={this.props.postArt}
        />
        {this.props.token ?
          <ComposeArt postArt={this.props.postArt} /> 
          : null
        }
      </div>
    )
  }
}