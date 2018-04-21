import * as actionTypes from './actionTypes'

const initialState = {
  devId: '',
  authKey: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CREDENTIALS:
      return {
        ...state,
        devId: action.devId,
        authKey: action.authKey
      }
    default:
      return state
  }
}
