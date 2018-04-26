import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

const TopPanel = props => (
  <div>
    <AppBar position="static">
      <Toolbar>
        {props.children}
      </Toolbar>
    </AppBar>
  </div>
)

TopPanel.defaultProps = {
  children: 'smite-react'
}

TopPanel.propTypes = {
  children: PropTypes.string
}

export default TopPanel
