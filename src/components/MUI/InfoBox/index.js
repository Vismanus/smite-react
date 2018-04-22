import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ListItem, ListItemText } from 'material-ui/List'

import TitledList from '../TitledList'

const InfoBox = props => (
  <TitledList title="Credentials">
    <ListItem divider>
      <ListItemText id="listKey">devId</ListItemText>
      <ListItemText id="listValue">{props.devId}</ListItemText>
    </ListItem>
    <ListItem divider>
      <ListItemText id="listKey">authKey</ListItemText>
      <ListItemText id="listValue">{props.authKey}</ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText id="listKey">sessionId</ListItemText>
      <ListItemText id="listValue">some MD5 output</ListItemText>
    </ListItem>
  </TitledList>
)

InfoBox.propTypes = {
  devId: PropTypes.string.isRequired,
  authKey: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  devId: state.apiConfig.devId,
  authKey: state.apiConfig.authKey
})

export default connect(mapStateToProps)(InfoBox)
