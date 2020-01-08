
import React, { useState } from 'react'
import './styles/drawer.css'
import SortRoundedIcon from '@material-ui/icons/SortRounded'

import {
  Drawer,
  Button,
  List,
  Divider,
  ListItem
} from '@material-ui/core'

export default function TempDrawer({ filterArt, contactMe, toggleContactMe, logoutClick, token }) {
  const [state, setState] = useState({
    left: false
  })

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div>
      <div className="menuIconContainer">
        <SortRoundedIcon
          className="menuIcon"
          onClick={toggleDrawer('left', !state.left)}
        />
      </div>
      <Drawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        <div
          className={'drawer'}
          role="presentation"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          <List>
            <ListItem onClick={filterArt}>
              <span data-medium="Art" className="iconContainer"></span>
              <span className="drawerTitle">Art</span>
            </ListItem>
            <ListItem onClick={filterArt}>
              <span data-medium="Jewelry" className="iconContainer">
              <span className="drawerIconContainer"></span></span>
              <span className="drawerTitle">Jewelry</span>
            </ListItem>
            <ListItem onClick={filterArt}>
              <span data-medium="Photos" className="iconContainer">
              <span className="drawerIconContainer"></span></span>
              <span className="drawerTitle">Photos</span>
            </ListItem>
            <ListItem onClick={filterArt}>
              <span data-medium="All" className="iconContainer">
              <span className="drawerIconContainer"></span></span>
              <span className="drawerTitle">View All</span>
            </ListItem>
            <Divider />

            <ListItem><span className="drawerTitle">Home</span></ListItem>
            {!contactMe ?
              <ListItem onClick={toggleContactMe}>
                <span className="iconContainer">
                  <span className="drawerIconContainer"></span>
                  </span><span>Contact Me</span>
              </ListItem>
              : 
              <ListItem onClick={toggleContactMe}>
                <div id="toTop">
                  <span className="iconContainer">
                    <span className="drawerIconContainer">
                      <i className="fas fa-angle-up"></i>
                    </span>
                  </span>
                  To Top
                </div>
              </ListItem>}
            {token ? 
              <ListItem
                href='/'
                onClick={logoutClick}
              >
                Logout
              </ListItem>
              :
              <h1 className="footerDrawer">
                chizetteArt
              </h1>
            }

          </List>
        </div>
      </Drawer>
    </div>
  )
}