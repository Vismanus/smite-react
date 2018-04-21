import React from 'react'
import MuiButton from 'material-ui/Button'
import PropTypes from 'prop-types'

const Button = props => (
  <MuiButton variant="raised" color={props.color}>
    {props.children}
  </MuiButton>
)

Button.defaultProps = {
  color: 'primary'
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Button
