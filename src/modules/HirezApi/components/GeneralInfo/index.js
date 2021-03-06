import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RaisedButton from '../../../../components/RaisedButton'
import TitledList from '../../../../components/TitledList'
import { Container } from '../../../../components/ListItem'
import Input from '../../../../components/Input'

import {
  saveDevIdInput,
  setDevId,
  saveMethodInput,
  setMethod,
  saveAuthKeyInput,
  setAuthKey
} from '../../actions'

const styles = {
  button: {
    marginLeft: 24
  }
}

const GeneralInfo = props => (
  <TitledList title="General">
    <Container>
      <Input
        label="devId"
        onBlur={event => props.saveDevIdInput(event.target.value)}
      />
      <RaisedButton
        style={styles.button}
        onClick={() => props.setDevId(props.devIdInput)}
      >
        save
      </RaisedButton>
    </Container>
    <Container>
      <Input
        label="method"
        onBlur={event => props.saveMethodInput(event.target.value)}
      />
      <RaisedButton
        style={styles.button}
        onClick={() => props.setMethod(props.methodInput)}
      >
        save
      </RaisedButton>
    </Container>
    <Container>
      <Input
        label="authKey"
        onBlur={event => props.saveAuthKeyInput(event.target.value)}
      />
      <RaisedButton
        style={styles.button}
        onClick={() => props.setAuthKey(props.authKeyInput)}
      >
        save
      </RaisedButton>
    </Container>
  </TitledList>
)

GeneralInfo.propTypes = {
  devIdInput: PropTypes.string.isRequired,
  setDevId: PropTypes.func.isRequired,
  saveDevIdInput: PropTypes.func.isRequired,
  methodInput: PropTypes.string.isRequired,
  setMethod: PropTypes.func.isRequired,
  saveMethodInput: PropTypes.func.isRequired,
  authKeyInput: PropTypes.string.isRequired,
  setAuthKey: PropTypes.func.isRequired,
  saveAuthKeyInput: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  devIdInput: state.hirezApi.devIdInput,
  devId: state.hirezApi.devId,
  methodInput: state.hirezApi.methodInput,
  method: state.hirezApi.method,
  authKeyInput: state.hirezApi.authKeyInput,
  authKey: state.hirezApi.authKey
})

const mapDispatchToProps = dispatch => ({
  saveDevIdInput: devIdInput => dispatch(saveDevIdInput(devIdInput)),
  setDevId: devId => dispatch(setDevId(devId)),
  saveMethodInput: methodInput => dispatch(saveMethodInput(methodInput)),
  setMethod: method => dispatch(setMethod(method)),
  saveAuthKeyInput: authKeyInput => dispatch(saveAuthKeyInput(authKeyInput)),
  setAuthKey: authKey => dispatch(setAuthKey(authKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInfo)
