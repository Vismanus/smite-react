import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'

import Drawer from 'material-ui/Drawer'

const styles = () => ({
  drawerPaper: {
    position: 'absolute',
    width: 240
  }
})

const SideMenu = props => (
  <Drawer
    variant="permanent"
    classes={{
      paper: props.classes.drawerPaper
    }}
  >
    {props.children}
  </Drawer>
)

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(SideMenu)
