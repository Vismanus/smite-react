import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const RaisedButton = (props) => {
  const { children, ...other } = props
  return (
    <Button
      variant="raised"
      {...other}
    >
      {children}
    </Button>
  )
}

RaisedButton.defaultProps = {
  color: 'secondary'
}

RaisedButton.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default RaisedButton
