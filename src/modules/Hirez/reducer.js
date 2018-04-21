import * as actionTypes from './actionTypes'

const initialState = {
  devId: '',
  authKey: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DEVID:
      return {
        ...state,
        devId: action.devId
      }
    case actionTypes.SET_AUTHKEY:
      return {
        ...state,
        authKey: action.authKey
      }
    default:
      return state
  }
}
