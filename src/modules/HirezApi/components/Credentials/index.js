import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ListItem, ListItemText } from 'material-ui/List'

import TitledList from '../../../../components/MUI/TitledList'

const Credentials = props => (
  <TitledList title="Credentials">
    <ListItem divider>
      <ListItemText id="listKey">devId</ListItemText>
      <ListItemText id="listValue">{props.devId}</ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText id="listKey">authKey</ListItemText>
      <ListItemText id="listValue">{props.authKey}</ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText id="listKey">method</ListItemText>
      <ListItemText id="listValue">{props.method}</ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText id="listKey">signature</ListItemText>
      <ListItemText id="listValue">{props.signature}</ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText id="listKey">timestamp</ListItemText>
      <ListItemText id="listValue">{props.timestamp}</ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText id="listKey">sessionId</ListItemText>
      <ListItemText id="listValue">{props.sessionId}</ListItemText>
    </ListItem>
  </TitledList>
)

Credentials.propTypes = {
  devId: PropTypes.string.isRequired,
  authKey: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  signature: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  sessionId: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  devId: state.hirezApi.devId,
  authKey: state.hirezApi.authKey,
  method: state.hirezApi.method,
  signature: state.hirezApi.signature,
  timestamp: state.hirezApi.timestamp,
  sessionId: state.hirezApi.session.session_id
})

export default connect(mapStateToProps)(Credentials)
