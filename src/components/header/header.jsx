import React, { Component } from 'react'
import { Button } from 'react-materialize'
import logo from './chizetteLogo.jpg'
import './header.css'
import SideNav from 'react-materialize/lib/SideNav';
import SideNavItem from 'react-materialize/lib/SideNavItem';

export default class header extends Component {

  secretLogin = (ev) => {
    ev.preventDefault()
    console.log(`Secret Login clicked!`)
  }

  render() {
    return (
      <div className="nav">
        <div className="logoAndTitle">
        <img className="logo" src={logo} alt="logo"></img><h1 className="chizetteArt"><b>chizette</b><span onClick={(ev) => this.secretLogin(ev)}>A</span>rt</h1>

      <SideNav
        trigger={<Button className="menuButton btn-flat"><i className="large material-icons icon menuIcon">sort</i></Button>}
        options={{ closeonClick: true }}>
        <SideNavItem><img className="sidebarLogo" src={logo}></img></SideNavItem>
        <br />
        <br />
        <SideNavItem href='/chizetteart'>Paintings</SideNavItem>
        <SideNavItem href='/chizetteart'>Jewelry</SideNavItem>
        <SideNavItem href='/chizetteart'>Photography</SideNavItem>
        <SideNavItem divider />
        <SideNavItem href='#'>Contact Me</SideNavItem>
        <SideNavItem href='#'>Logout</SideNavItem>
        </SideNav>
        </div>
        {/* <Button className="backButton btn-flat"><i className="large material-icons icon backIcon">keyboard_arrow_left</i></Button> */}
      </div>
    )
  }
}