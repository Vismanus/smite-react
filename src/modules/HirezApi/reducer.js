import md5 from 'md5'
import * as actionTypes from './actionTypes'

const initialState = {
  devIdInput: '',
  authKeyInput: '',
  methodInput: '',
  devId: '',
  authKey: '',
  method: '',
  signature: '',
  timestamp: '',
  sessionId: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_SIGNATURE:
      return {
        ...state,
        signature: md5(`${state.devId}${state.method}${state.authKey}${action.timestamp}`),
        timestamp: action.timestamp
      }
    case actionTypes.SAVE_METHOD_INPUT:
      return {
        ...state,
        methodInput: action.methodInput
      }
    case actionTypes.SET_METHOD:
      return {
        ...state,
        method: action.method
      }
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
