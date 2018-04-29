import React from 'react'
import { ListItemText } from 'material-ui/List'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    width: '100%'
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
    <ListItemText style={styles.key}>{props.label}</ListItemText>
    <ListItemText style={styles.value}>{props.value}</ListItemText>
  </div>
)

Text.defaultProps = {
  label: 'N/A',
  value: 'N/A'
}

Text.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}

export default Text
