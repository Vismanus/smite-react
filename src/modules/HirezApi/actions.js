import * as actionTypes from './actionTypes'

export function setDevId(devId) {
  return {
    type: actionTypes.SET_DEVID,
    devId
  }
}

export function setAuthKey(authKey) {
  return {
    type: actionTypes.SET_AUTHKEY,
    authKey
  }
}

export function saveDevIdInput(devIdInput) {
  return {
    type: actionTypes.SAVE_DEVID_INPUT,
    devIdInput
  }
}

export function saveAuthKeyInput(authKeyInput) {
  return {
    type: actionTypes.SAVE_AUTHKEY_INPUT,
    authKeyInput
  }
}
