import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'

import RaisedButton from '../../../../components/MUI/RaisedButton'
import TitledList from '../../../../components/MUI/TitledList'

import {
  saveDevIdInput,
  saveAuthKeyInput,
  setDevId,
  setAuthKey
} from '../../actions'

const Setup = props => (
  <TitledList title="Setup">
    <ListItem divider>
      <TextField
        label="devId"
        margin="none"
        fullWidth
        onBlur={event => props.saveDevIdInput(event.target.value)}
      />
      <RaisedButton
        color="primary"
        onClick={() => props.setDevId(props.devIdInput)}
        id="Set-button"
      >
        set
      </RaisedButton>
    </ListItem>
    <ListItem divider>
      <TextField
        label="authKey"
        margin="none"
        fullWidth
        onBlur={event => props.saveAuthKeyInput(event.target.value)}
      />
      <RaisedButton
        color="primary"
        onClick={() => props.setAuthKey(props.authKeyInput)}
        id="Set-button"
      >
        set
      </RaisedButton>
    </ListItem>
    <ListItem>
      <RaisedButton color="primary" fullWidth>
        create new session
      </RaisedButton>
    </ListItem>
  </TitledList>
)

Setup.propTypes = {
  authKeyInput: PropTypes.string.isRequired,
  devIdInput: PropTypes.string.isRequired,
  saveDevIdInput: PropTypes.func.isRequired,
  saveAuthKeyInput: PropTypes.func.isRequired,
  setDevId: PropTypes.func.isRequired,
  setAuthKey: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  devIdInput: state.hirezApi.devIdInput,
  authKeyInput: state.hirezApi.authKeyInput
})

const mapDispatchToProps = dispatch => ({
  saveDevIdInput: devIdInput => dispatch(saveDevIdInput(devIdInput)),
  saveAuthKeyInput: authKeyInput => dispatch(saveAuthKeyInput(authKeyInput)),
  setDevId: devId => dispatch(setDevId(devId)),
  setAuthKey: authKey => dispatch(setAuthKey(authKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(Setup)
