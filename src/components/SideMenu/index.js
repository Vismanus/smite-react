import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'

import Drawer from 'material-ui/Drawer'

const styles = () => ({
  drawerPaper: {
    position: 'relative',
    width: 240
  }
})

const SideMenu = props => (
  <Drawer
    variant="permanent"
    classes={{
      paper: props.classes.drawerPaper
    }}
  />
)

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SideMenu)
