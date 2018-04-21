import React from 'react'
import Card from 'material-ui/Card'
import List, { ListItem, ListItemText } from 'material-ui/List'

const InfoBox = () => (
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
          <ListItemText style={{ flex: 4 }}>2575</ListItemText>
        </ListItem>
        <ListItem divider>
          <ListItemText style={{ flex: 1 }}>authKey</ListItemText>
          <ListItemText style={{ flex: 4 }}>F87240FCDE3E49B0B8D47EED2E117038</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText style={{ flex: 1 }}>sessionId</ListItemText>
          <ListItemText style={{ flex: 4 }}>some MD5 output</ListItemText>
        </ListItem>
      </List>
    </Card>
  </div>
)

export default InfoBox
