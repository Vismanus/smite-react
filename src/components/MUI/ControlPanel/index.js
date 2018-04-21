import React from 'react'
import Card from 'material-ui/Card'
import List, { ListItem } from 'material-ui/List'
import TextField from 'material-ui/TextField'

import Button from '../Button'

const ControlPanel = () => (
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
          <TextField label="devId" margin="none" fullWidth />
          <Button
            color="primary"
            style={{ marginLeft: 24 }}
          >
            set
          </Button>
        </ListItem>
        <ListItem>
          <TextField label="authKey" margin="none" fullWidth />
          <Button
            color="primary"
            style={{ marginLeft: 24 }}
          >
            set
          </Button>
        </ListItem>
      </List>
    </Card>
  </div>
)

export default ControlPanel
