import React from 'react'
import SideNav from 'react-materialize/lib/SideNav'
import SideNavItem from 'react-materialize/lib/SideNavItem'
import { Button, Badge } from 'react-materialize'
import './sidebar.css'

export default class Sidebar extends React.Component {

  render() {

    const { logoutClick } = this.props
    return (
      <SideNav className="sideNav"
        trigger={<Button className="menuButton btn-flat"><i className="large material-icons icon menuIcon">sort</i></Button>}
        options={{ closeonClick: true }}>
        <div>
          <a href="/"><h4 className="sidebarchizetteArt"><b>chizette</b>Art</h4></a>
        </div>
        <br />
          <Badge className="new badge" data-badge-caption="Prints Coming Soon!"></Badge>
          <SideNavItem onClick={this.props.filterArt}><span data-medium="Art" className="iconContainer"></span><span className="sideNavTitle">Art</span></SideNavItem>
          <SideNavItem onClick={this.props.filterArt}><span data-medium="Jewelry" className="iconContainer"><span className="sidebarIconContainer"></span></span><span className="sideNavTitle">Jewelry</span></SideNavItem>
          <SideNavItem onClick={this.props.filterArt}><span data-medium="Photography" className="iconContainer"><span className="sidebarIconContainer"></span></span><span className="sideNavTitle">Photography</span></SideNavItem>
        <SideNavItem divider />
        <br />
        {!this.props.contactMe ? <SideNavItem onClick={this.props.toggleContactMe} ><span className="iconContainer"><span className="sidebarIconContainer"></span></span><span className="sideNavTitle">Contact Me</span></SideNavItem> : <SideNavItem onClick={this.props.toggleContactMe}><div id="toTop"><span className="iconContainer"><span className="sidebarIconContainer"><i className="fas fa-angle-up"></i></span></span>To Top</div></SideNavItem>}
        {this.props.token ? <SideNavItem href='/' onClick={logoutClick} >Logout</SideNavItem>: <h1 className="footerSidebar">chizetteArt</h1>}
      </SideNav>
    )
  }
}