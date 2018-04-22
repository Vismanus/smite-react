import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ListItem, ListItemText } from 'material-ui/List'
import TitledList from '../TitledList'

const Firestore = props => (
  <TitledList title="Firestore">
    <ListItem>
      <ListItemText>Logged in</ListItemText>
      <ListItemText>{props.loggedIn.toString()}</ListItemText>
    </ListItem>
  </TitledList>
)

Firestore.propTypes = {
  loggedIn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
}

const mapStateToProps = state => ({
  loggedIn: state.apiConfig.loggedIn
})

export default connect(mapStateToProps)(Firestore)
