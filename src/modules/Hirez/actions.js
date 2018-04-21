import * as actionTypes from './actionTypes'

export function loadCredentials(devId, authKey) {
  return {
    type: actionTypes.LOAD_CREDENTIALS,
    devId,
    authKey
  }
}
