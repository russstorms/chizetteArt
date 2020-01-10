import React from 'react'
// import ComposeArt from '../create-art/createart'
import logo from './styles/chizetteLogo.jpg'
import './styles/navbar.css'


export default function Navbar({ toggleLoginForm, secretLogin }) {

  // Admin — Login form
  secretLogin = (ev) => {
    ev.preventDefault()
    return toggleLoginForm()
  }

  return (
    <div className="Navbar">
      <a className="anchorToHome" href="/">
        <img className="logo" src={logo} alt="logo"></img>
      </a>
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
          <span className="A" onClick={(ev) => secretLogin(ev)}>A</span>
          <span className="r">r</span>
          <span className="t3">t</span>
        </h1>
      {/* {this.props.token ?
        <ComposeArt postArt={this.props.postArt} /> 
        : null
      } */}
    </div>
  )
}