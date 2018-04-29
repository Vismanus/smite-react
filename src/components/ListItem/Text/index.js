import React from 'react'
import { ListItemText } from 'material-ui/List'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex'
  },
  key: {
    flex: 1
  },
  value: {
    flex: 4
  }
}

const Text = props => (
  <div style={styles.container}>
    <ListItemText style={styles.key}>{props.key}</ListItemText>
    <ListItemText style={styles.value}>{props.value}</ListItemText>
  </div>
)

Text.defaultProps = {
  value: ''
}

Text.propTypes = {
  key: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default Text
