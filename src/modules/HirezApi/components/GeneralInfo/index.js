import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RaisedButton from '../../../../components/RaisedButton'
import TitledList from '../../../../components/TitledList'
import { Container } from '../../../../components/ListItem'
import Input from '../../../../components/Input'

import {
  saveDevIdInput,
  saveMethodInput,
  setDevId,
  setMethod
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
        color="primary"
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
        color="primary"
        onClick={() => props.setMethod(props.methodInput)}
      >
        save
      </RaisedButton>
    </Container>
  </TitledList>
)

GeneralInfo.propTypes = {
  devIdInput: PropTypes.string.isRequired,
  methodInput: PropTypes.string.isRequired,
  saveDevIdInput: PropTypes.func.isRequired,
  saveMethodInput: PropTypes.func.isRequired,
  setDevId: PropTypes.func.isRequired,
  setMethod: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  devIdInput: state.hirezApi.devIdInput,
  methodInput: state.hirezApi.methodInput,
  devId: state.hirezApi.devId,
  method: state.hirezApi.method
})

const mapDispatchToProps = dispatch => ({
  saveMethodInput: methodInput => dispatch(saveMethodInput(methodInput)),
  saveDevIdInput: devIdInput => dispatch(saveDevIdInput(devIdInput)),
  setMethod: method => dispatch(setMethod(method)),
  setDevId: devId => dispatch(setDevId(devId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInfo)
