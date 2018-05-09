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
      <DoubleText label="Id" value={props.id} />
    </Container>

    <Container>
      <DoubleText label="Timestamp" value={props.timestamp} />
    </Container>

    <Container>
      <DoubleText label="Method" value={props.method} />
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
  </TitledList>
)

Signature.propTypes = {
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  createSignature: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  id: state.hirezApi.signature.id,
  timestamp: state.hirezApi.signature.timestamp,
  method: state.hirezApi.signature.method
})

const mapDispatchToProps = dispatch => ({
  createSignature: timestamp => dispatch(createSignature(timestamp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signature)
