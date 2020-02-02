import React from 'react'
import logo from './styles/chizetteLogo.jpg'

// Styles
import './styles/Navbar.css'


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
          <span className="chizette"><span className="c">c</span>
            <span className="h">h</span>
            <span className="i">i</span>
            <span className="z">z</span>
            <span className="e">e</span>
            <span className="t">t</span>
            <span className="t2">t</span>
            <span className="e2">e</span>
          </span>
          <span className="A" onClick={(e) => secretLogin(e)}>A</span>
          <span className="r">r</span>
          <span className="t3">t</span>
        </h1>
    </div>
  )
}