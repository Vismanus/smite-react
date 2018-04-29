import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'

const Input = (props) => {
  const { label, ...other } = props
  return (
    <TextField
      label={label}
      fullWidth
      margin="none"
      {...other}
    />
  )
}

Input.defaultProps = {
  label: 'input'
}

Input.propTypes = {
  label: PropTypes.string
}

export default Input
