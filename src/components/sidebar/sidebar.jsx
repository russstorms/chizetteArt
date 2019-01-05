import React from 'react'
import SideNav from 'react-materialize/lib/SideNav'
import SideNavItem from 'react-materialize/lib/SideNavItem'
import { Button } from 'react-materialize'
import './sidebar.css'


export default class Sidebar extends React.Component {
  
  render() {
    const { logoutClick } = this.props
    return (
      <SideNav className="sideNav"
        trigger={<Button className="menuButton btn-flat"><i className="large material-icons icon menuIcon">sort</i></Button>}
        options={{ closeonClick: true }}>
        <div>
          <h4 className="sidebarchizetteArt"><b>chizette</b>Art</h4>
        </div>
        <br />
        <SideNavItem href='/chizetteart'><span className="iconContainer"><i className="small material-icons icon sidebarIcon">palette</i></span><span className="sideNavTitle">Paintings</span></SideNavItem>
        <SideNavItem href='/chizetteart'><span className="iconContainer"><i className="small material-icons icon sidebarIcon">redeem</i></span><span className="sideNavTitle">Jewelry</span></SideNavItem>
        <SideNavItem href='/chizetteart'><span className="iconContainer"><i className="small material-icons icon sidebarIcon">camera_roll</i></span><span className="sideNavTitle">Photography</span></SideNavItem>
        <SideNavItem divider />
        <br />
        <SideNavItem href='#'><span className="iconContainer"><i className="small material-icons icon sidebarIcon">person_outline</i></span><span className="sideNavTitle">Contact Me</span></SideNavItem>
        <br />
        <SideNavItem href='#'>{this.props.token ? <SideNavItem href='#' onPress={ logoutClick }>Logout</SideNavItem>: <h3>HI not logged in</h3>}</SideNavItem>
      </SideNav>
    )
  }

}