import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styles = {
  position: 'absolute',
  left: '240px',
  width: 'calc(100% - 240px)'
}

const TopPanel = props => (
  <AppBar style={styles}>
    <Toolbar>
      <Typography variant="title" color="inherit">
        {props.children}
      </Typography>
    </Toolbar>
  </AppBar>
)

TopPanel.defaultProps = {
  children: 'smite-react'
}

TopPanel.propTypes = {
  children: PropTypes.string
}

export default TopPanel
