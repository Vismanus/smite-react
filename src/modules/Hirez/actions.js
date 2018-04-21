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
