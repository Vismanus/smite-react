import React from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import smiteLogo from '../../../images/smiteLogo.png'

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
        <img src={smiteLogo} className="App-logo" alt="smiteLogo" />
      </Toolbar>
    </AppBar>
  </div>
)

export default TopPanel
