import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import Card from 'material-ui/Card'
import List from 'material-ui/List'
import Toolbar from 'material-ui/Toolbar'

const styles = {
  card: {
    width: 440,
    height: 'fit-content'
  }
}

const TitledList = props => (
  <Card style={styles.card}>
    <AppBar position="static">
      <Toolbar>{props.title}</Toolbar>
    </AppBar>
    <List disablePadding>{props.children}</List>
  </Card>
)

TitledList.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default TitledList
