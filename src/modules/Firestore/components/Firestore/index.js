import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ListItem, ListItemText } from 'material-ui/List'

import TitledList from '../../../../components/MUI/TitledList'
import RaisedButton from '../../../../components/MUI/RaisedButton'

import { loginRequest } from '../../actions'

const Firestore = props => (
  <TitledList title="Firestore">
    <ListItem divider>
      <ListItemText id="listKey">Logged in</ListItemText>
      <ListItemText id="listValue">{props.loggedIn.toString()}</ListItemText>
      <RaisedButton color="primary" onClick={props.loginRequest}>
        log in
      </RaisedButton>
    </ListItem>
  </TitledList>
)

Firestore.propTypes = {
  loggedIn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  loginRequest: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  loggedIn: state.firestore.loggedIn
})

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(loginRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Firestore)
