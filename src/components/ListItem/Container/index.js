import React from 'react'
import PropTypes from 'prop-types'

import { ListItem } from 'material-ui/List'

const styles = {
  justifyContent: 'center'
}

const Container = props => (
  <ListItem style={styles} divider={props.divider}>
    {props.children}
  </ListItem>
)

Container.defaultProps = {
  divider: true
}

Container.propTypes = {
  divider: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Container
