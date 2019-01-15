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
          <a href="/chizetteart"><h4 className="sidebarchizetteArt"><b>chizette</b>Art</h4></a>
        </div>
        <br />
          <SideNavItem onClick={this.props.filterArt}><span data-medium="Art" className="iconContainer"><i className="small material-icons icon sidebarIcon">palette</i></span><span className="sideNavTitle">Art</span></SideNavItem>
          <SideNavItem onClick={this.props.filterArt}><span data-medium="Jewelry" className="iconContainer"><i className="small material-icons icon sidebarIcon">redeem</i></span><span className="sideNavTitle">Jewelry</span></SideNavItem>
          <SideNavItem onClick={this.props.filterArt}><span data-medium="Photography" className="iconContainer"><i className="small material-icons icon sidebarIcon">camera_roll</i></span><span className="sideNavTitle">Photography</span></SideNavItem>
        <SideNavItem divider />
        <br />
        <SideNavItem onClick={this.props.toggleContactMe} ><span className="iconContainer"><i className="small material-icons icon sidebarIcon">person_outline</i></span><span className="sideNavTitle">Contact Me</span></SideNavItem>
        {this.props.token ? <SideNavItem href='/chizetteart' onClick={logoutClick} >Logout</SideNavItem>: <h1 className="footer">chizetteArt</h1>}
      </SideNav>
    )
  }
}