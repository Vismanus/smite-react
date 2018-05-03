import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'moment'

import RaisedButton from '../../../../components/RaisedButton'
import TitledList from '../../../../components/TitledList'
import { Container, DoubleText } from '../../../../components/ListItem'

import { createSignature } from '../../actions'

const Signature = props => (
  <TitledList title="Signature">
    <Container>
      <DoubleText label="Current" value={props.signature} />
    </Container>

    <Container>
      <DoubleText label="timestamp" value={props.timestamp} />
    </Container>

    <Container>
      <RaisedButton
        onClick={() =>
          props.createSignature(new Moment().utc().format('YYYYMMDDHHmmss'))
        }
      >
        Create new Signature
      </RaisedButton>
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

  </TitledList>
)

Signature.propTypes = {
  signature: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  createSignature: PropTypes.func.isRequired,
  devId: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  authKey: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  signature: state.hirezApi.signature,
  timestamp: state.hirezApi.timestamp,
  devId: state.hirezApi.devId,
  method: state.hirezApi.method,
  authKey: state.hirezApi.authKey
})

const mapDispatchToProps = dispatch => ({
  createSignature: timestamp => dispatch(createSignature(timestamp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signature)
