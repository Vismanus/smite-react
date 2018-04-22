import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Card from 'material-ui/Card'
import List, { ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'
import Toolbar from 'material-ui/Toolbar'

import {
  loginRequest,
  saveDevIdInput,
  saveAuthKeyInput,
  setDevId,
  setAuthKey
} from '../../actions'
import Button from '../Button'

const ControlPanel = props => (
  <div className="Card">
    <Card>
      <AppBar position="static">
        <Toolbar>Hirez API Setup</Toolbar>
      </AppBar>
      <List disablePadding>
        <ListItem divider>
          <TextField
            label="devId"
            margin="none"
            fullWidth
            onBlur={event => props.saveDevIdInput(event.target.value)}
          />
          <Button
            color="primary"
            onClick={() => props.setDevId(props.devIdInput)}
            id="Set-button"
          >
            set
          </Button>
        </ListItem>
        <ListItem divider>
          <TextField
            label="authKey"
            margin="none"
            fullWidth
            onBlur={event => props.saveAuthKeyInput(event.target.value)}
          />
          <Button
            color="primary"
            onClick={() => props.setAuthKey(props.authKeyInput)}
            id="Set-button"
          >
            set
          </Button>
        </ListItem>
        <ListItem>
          <Button
            color="primary"
            fullWidth
            onClick={props.loginRequest}
          >
            create new session
          </Button>
        </ListItem>
      </List>
    </Card>
  </div>
)

ControlPanel.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  authKeyInput: PropTypes.string.isRequired,
  devIdInput: PropTypes.string.isRequired,
  saveDevIdInput: PropTypes.func.isRequired,
  saveAuthKeyInput: PropTypes.func.isRequired,
  setDevId: PropTypes.func.isRequired,
  setAuthKey: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  devIdInput: state.apiConfig.devIdInput,
  authKeyInput: state.apiConfig.authKeyInput
})

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(loginRequest()),
  saveDevIdInput: devIdInput => dispatch(saveDevIdInput(devIdInput)),
  saveAuthKeyInput: authKeyInput => dispatch(saveAuthKeyInput(authKeyInput)),
  setDevId: devId => dispatch(setDevId(devId)),
  setAuthKey: authKey => dispatch(setAuthKey(authKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
