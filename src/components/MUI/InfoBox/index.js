import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Card from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Toolbar from 'material-ui/Toolbar'

const InfoBox = props => (
  <div className="Card">
    <Card>
      <AppBar position="static">
        <Toolbar>Hirez API Credentials</Toolbar>
      </AppBar>
      <List disablePadding>
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
      </List>
    </Card>
  </div>
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
