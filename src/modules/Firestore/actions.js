import * as actionTypes from './actionTypes'

export function loginRequest() {
  return {
    type: actionTypes.LOGIN_REQUEST
  }
}

export function loginSuccess() {
  return {
    type: actionTypes.LOGIN_SUCCESS
  }
}

export function loginFailure() {
  return {
    type: actionTypes.LOGIN_FAILURE
  }
}
