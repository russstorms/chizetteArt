import React, { useState } from 'react'
import {
  Drawer,
  List,
  Divider,
  ListItem
} from '@material-ui/core'

import './styles/drawer.css'
import SortRoundedIcon from '@material-ui/icons/SortRounded'

export default function DrawerSideNav({ configureFilteredTerm, toggleContactMe, contactMe, logoutClick, token }) {
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
    <div className="Drawer">
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
            <ListItem onClick={configureFilteredTerm}>
              <span className="drawerTitle">Art</span>
            </ListItem>
            <ListItem onClick={configureFilteredTerm}>
              <span className="drawerTitle">Jewelry</span>
            </ListItem>
            <ListItem onClick={configureFilteredTerm}>
              <span className="drawerTitle">Photos</span>
            </ListItem>
            <ListItem onClick={configureFilteredTerm}>
              <span className="drawerTitle">View All</span>
            </ListItem>
            <Divider />

            <ListItem component="a" href="/"><span className="drawerTitle">Home</span></ListItem>
            {!contactMe ?
              <ListItem onClick={toggleContactMe}>
                <span>Contact Me</span>
              </ListItem>
              : 
              <ListItem onClick={toggleContactMe}>
                <span className="drawerIconContainer">
                  <i className="fas fa-angle-up"></i>
                </span>
                To Top
              </ListItem>}
            {token ? 
            <div>
              <ListItem
                href='/'
                onClick={logoutClick}
              >
                Logout
              </ListItem>
            </div>

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
