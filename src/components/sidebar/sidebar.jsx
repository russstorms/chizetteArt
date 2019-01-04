import React from 'react'
import SideNav from 'react-materialize/lib/SideNav'
import SideNavItem from 'react-materialize/lib/SideNavItem'
import { Button } from 'react-materialize'
import './sidebar.css'


export default class Sidebar extends React.Component {

  render() {
    return (
      <SideNav className="sideNav"
        trigger={<Button className="menuButton btn-flat"><i className="large material-icons icon menuIcon">sort</i></Button>}
        options={{ closeonClick: true }}>
        <div>
          <h4 className="sidebarchizetteArt"><b>chizette</b>Art</h4>
        </div>
        <br />
        <SideNavItem href='/chizetteart'>Paintings</SideNavItem>
        <SideNavItem href='/chizetteart'>Jewelry</SideNavItem>
        <SideNavItem href='/chizetteart'>Photography</SideNavItem>
        <SideNavItem divider />
        <SideNavItem href='#'>Contact Me</SideNavItem>
        <br />
        <SideNavItem href='#'>Logout</SideNavItem>
      </SideNav>
    )
  }

}