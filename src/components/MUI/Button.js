import React from 'react'
import MuiButton from 'material-ui/Button'
import PropTypes from 'prop-types'

const Button = props => (
  <MuiButton variant="raised" color={props.color}>
    Button
  </MuiButton>
)

Button.defaultProps = {
  color: 'primary'
}

Button.propTypes = {
  color: PropTypes.string
}

export default Button
