import React from 'react'
import MuiAppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import logo from '../../../logo.png'

const AppBar = () => (
  <div>
    <MuiAppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} className="App-logo" alt="logo" />
      </Toolbar>
    </MuiAppBar>
  </div>
)

export default AppBar
