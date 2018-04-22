import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ListItem, ListItemText } from 'material-ui/List'

import { loginRequest } from '../../actions'
import TitledList from '../TitledList'
import Button from '../Button'

const Firestore = props => (
  <TitledList title="Firestore">
    <ListItem>
      <ListItemText>Logged in</ListItemText>
      <ListItemText>{props.loggedIn.toString()}</ListItemText>
    </ListItem>
    <ListItem>
      <Button color="primary" fullWidth onClick={props.loginRequest}>
        log in
      </Button>
    </ListItem>
  </TitledList>
)

Firestore.propTypes = {
  loggedIn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  loginRequest: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  loggedIn: state.apiConfig.loggedIn
})

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(loginRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Firestore)
