import React from 'react'
import PropTypes from 'prop-types'

import { ListItemText } from 'material-ui/List'

const SingleText = props => (
  <ListItemText>
    {props.children}
  </ListItemText>
)

SingleText.propTypes = {
  children: PropTypes.string.isRequired
}

export default SingleText
