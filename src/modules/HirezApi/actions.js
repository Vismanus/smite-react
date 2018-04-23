import * as actionTypes from './actionTypes'

export function createSignature(timestamp) {
  return {
    type: actionTypes.CREATE_SIGNATURE,
    timestamp
  }
}

export function setMethod(method) {
  return {
    type: actionTypes.SET_METHOD,
    method
  }
}

export function saveMethodInput(methodInput) {
  return {
    type: actionTypes.SAVE_METHOD_INPUT,
    methodInput
  }
}

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
