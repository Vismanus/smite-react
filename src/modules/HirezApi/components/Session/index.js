import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { saveSession } from '../../actions'

import RaisedButton from '../../../../components/RaisedButton'
import TitledList from '../../../../components/TitledList'
import { Container, DoubleText } from '../../../../components/ListItem'

const Session = (props) => {
  const fetchSession = () => {
    fetch(`http://api.smitegame.com/smiteapi.svc/${props.method}json/${
      props.devId}/${props.signatureId}/${props.signatureTimestamp}`)
      .then(response => response.json())
      .then(json => props.saveSession(json))
      .catch((ex) => {
        console.log('parsing failed', ex)
      })
  }
  return (
    <TitledList title="Session">
      <Container>
        <DoubleText label="Id" value={props.sessionId} />
      </Container>
      <Container>
        <DoubleText label="Timestamp" value={props.timestamp} />
      </Container>
      <Container>
        <DoubleText label="Time left" value={props.timeleft} />
      </Container>
      <Container>
        <RaisedButton onClick={() => fetchSession()}>
          create new session
        </RaisedButton>
      </Container>
    </TitledList>
  )
}

Session.propTypes = {
  sessionId: PropTypes.string.isRequired,
  timeleft: PropTypes.string.isRequired,
  devId: PropTypes.string.isRequired,
  signatureTimestamp: PropTypes.string.isRequired,
  signatureId: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  saveSession: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  sessionId: state.hirezApi.session.id,
  timeleft: state.hirezApi.session.timeleft,
  devId: state.hirezApi.devId,
  signatureTimestamp: state.hirezApi.signature.timestamp,
  signatureId: state.hirezApi.signature.id,
  timestamp: state.hirezApi.session.timestamp,
  method: state.hirezApi.signature.method
})

const mapDispatchToProps = dispatch => ({
  saveSession: timestamp => dispatch(saveSession(timestamp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Session)
