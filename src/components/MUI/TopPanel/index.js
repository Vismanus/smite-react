import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import logo from '../../../logo.png'

const TopPanel = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} className="App-logo" alt="logo" />
      </Toolbar>
    </AppBar>
  </div>
)

export default TopPanel
