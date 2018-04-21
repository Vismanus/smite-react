import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setDevId, setAuthKey } from './actions'
import Button from '../../components/MUI/Button'

const Hirez = props => (
  <div>
    <Button
      color="primary"
      onClick={() => props.setDevId('2575')}
    >
      devId
    </Button>
    <Button
      color="secondary"
      onClick={() => props.setAuthKey('F87240FCDE3E49B0B8D47EED2E117038')}
    >
      authKey
    </Button>
  </div>
)

Hirez.propTypes = {
  setDevId: PropTypes.func.isRequired,
  setAuthKey: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setDevId: devId => dispatch(setDevId(devId)),
  setAuthKey: authKey => dispatch(setAuthKey(authKey))
})

export default connect(null, mapDispatchToProps)(Hirez)
