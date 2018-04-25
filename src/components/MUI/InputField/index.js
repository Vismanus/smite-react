import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'

const InputField = ({ label, ...otherProps }) => (
  <TextField label margin="none" fullWidth {...otherProps} />
)

InputField.propTypes = {
  label: PropTypes.string.isRequired
}

export default InputField
