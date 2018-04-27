import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const RaisedButton = (props) => {
  const { color, ...other } = props
  return (
    <Button
      variant="raised"
      color={props.color}
      {...other}
    >
      {props.children}
    </Button>
  )
}

RaisedButton.defaultProps = {
  color: 'primary'
}

RaisedButton.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default RaisedButton
