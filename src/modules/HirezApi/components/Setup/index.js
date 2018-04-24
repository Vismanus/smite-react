import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'moment'

import { ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'

import RaisedButton from '../../../../components/MUI/RaisedButton'
import TitledList from '../../../../components/MUI/TitledList'

import {
  createSignature,
  saveDevIdInput,
  saveAuthKeyInput,
  saveMethodInput,
  setDevId,
  setAuthKey,
  setMethod,
  saveSession
} from '../../actions'

const Setup = (props) => {
  const fetchSession = () => {
    fetch(`http://api.smitegame.com/smiteapi.svc/${props.method}json/${
      props.devId
    }/${props.signature}/${props.timestamp}`)
      .then(response => response.json())
      .then(json => props.saveSession(json))
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }
  return (
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
      <ListItem divider>
        <TextField
          label="method"
          margin="none"
          fullWidth
          onBlur={event => props.saveMethodInput(event.target.value)}
        />
        <RaisedButton
          color="primary"
          onClick={() => props.setMethod(props.methodInput)}
          id="Set-button"
        >
          set
        </RaisedButton>
      </ListItem>
      <ListItem>
        <RaisedButton
          id="signature"
          color="primary"
          fullWidth
          onClick={() =>
            props.createSignature(new Moment().utc().format('YYYYMMDDHHmmss'))
          }
        >
          signature
        </RaisedButton>
        <RaisedButton
          id="session"
          color="primary"
          fullWidth
          onClick={() => fetchSession()}
        >
          session
        </RaisedButton>
      </ListItem>
    </TitledList>
  )
}

Setup.propTypes = {
  createSignature: PropTypes.func.isRequired,
  saveSession: PropTypes.func.isRequired,
  authKeyInput: PropTypes.string.isRequired,
  devIdInput: PropTypes.string.isRequired,
  methodInput: PropTypes.string.isRequired,
  saveDevIdInput: PropTypes.func.isRequired,
  saveAuthKeyInput: PropTypes.func.isRequired,
  saveMethodInput: PropTypes.func.isRequired,
  setDevId: PropTypes.func.isRequired,
  setAuthKey: PropTypes.func.isRequired,
  setMethod: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  devId: PropTypes.string.isRequired,
  signature: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  devIdInput: state.hirezApi.devIdInput,
  authKeyInput: state.hirezApi.authKeyInput,
  methodInput: state.hirezApi.methodInput,
  method: state.hirezApi.method,
  devId: state.hirezApi.devId,
  signature: state.hirezApi.signature,
  timestamp: state.hirezApi.timestamp
})

const mapDispatchToProps = dispatch => ({
  createSignature: timestamp => dispatch(createSignature(timestamp)),
  saveSession: json => dispatch(saveSession(json)),
  saveMethodInput: methodInput => dispatch(saveMethodInput(methodInput)),
  saveDevIdInput: devIdInput => dispatch(saveDevIdInput(devIdInput)),
  saveAuthKeyInput: authKeyInput => dispatch(saveAuthKeyInput(authKeyInput)),
  setMethod: method => dispatch(setMethod(method)),
  setDevId: devId => dispatch(setDevId(devId)),
  setAuthKey: authKey => dispatch(setAuthKey(authKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(Setup)
