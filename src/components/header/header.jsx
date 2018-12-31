import React, { Component } from 'react'
import { Button } from 'react-materialize'
import logo from './chizetteLogo.jpg'
import './header.css'

export default class header extends Component {
  render() {
    return (
      <main className="container">
        <div className="nav">
        <span><img className="logo" src={logo} alt="logo"></img><h1 className="chizetteArt">chizetteArt</h1></span>
        </div>
        <Button className="backButton btn-flat"><i className="large material-icons icon backIcon">keyboard_arrow_left</i></Button>
        <Button className="menuButton btn-flat"><i className="large material-icons icon menuIcon">sort</i></Button>
      </main>
    )
  }
}