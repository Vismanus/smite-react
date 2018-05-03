import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RaisedButton from '../../../../components/RaisedButton'
import TitledList from '../../../../components/TitledList'
import { Container, DoubleText } from '../../../../components/ListItem'

const Signature = props => (
  <TitledList title="Signature">
    <Container>
      <DoubleText label="Current" value={props.signature} />
    </Container>

    <Container>
      <RaisedButton>Create new signature</RaisedButton>
    </Container>

    <Container>
      <DoubleText label="devId" value={props.devId} />
    </Container>

    <Container>
      <DoubleText label="method" value={props.method} />
    </Container>

    <Container>
      <DoubleText label="authKey" value={props.authKey} />
    </Container>

    <Container>
      <DoubleText label="timestamp" value={props.timestamp} />
    </Container>
  </TitledList>
)

Signature.propTypes = {
  signature: PropTypes.string.isRequired,
  devId: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  authKey: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  signature: state.hirezApi.signature,
  devId: state.hirezApi.devId,
  method: state.hirezApi.method,
  authKey: state.hirezApi.authKey,
  timestamp: state.hirezApi.timestamp
})

export default connect(mapStateToProps)(Signature)
