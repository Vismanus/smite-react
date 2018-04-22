import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List'

const InfoBox = props => (
  <div
    style={{
      width: '100%',
      maxWidth: '500px',
      padding: 24,
      flexGrow: 1
    }}
  >
    <Card>
      <List disablePadding>
        <ListItem divider>
          <ListItemText style={{ flex: 1 }}>devId</ListItemText>
          <ListItemText style={{ flex: 4 }}>{props.devId}</ListItemText>
        </ListItem>
        <ListItem divider>
          <ListItemText style={{ flex: 1 }}>authKey</ListItemText>
          <ListItemText style={{ flex: 4 }}>{props.authKey}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText style={{ flex: 1 }}>sessionId</ListItemText>
          <ListItemText style={{ flex: 4 }}>some MD5 output</ListItemText>
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
