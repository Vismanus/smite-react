import * as actionTypes from './actionTypes'

const initialState = {
  devIdInput: '',
  authKeyInput: '',
  devId: '',
  authKey: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_DEVID_INPUT:
      return {
        ...state,
        devIdInput: action.devIdInput
      }
    case actionTypes.SAVE_AUTHKEY_INPUT:
      return {
        ...state,
        authKeyInput: action.authKeyInput
      }
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
