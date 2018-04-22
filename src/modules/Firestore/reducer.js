import * as actionTypes from './actionTypes'

const initialState = {
  loggedIn: 'not yet attempted'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state
  }
}
