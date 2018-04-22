import { combineReducers } from 'redux'
import HirezApiReducer from './modules/HirezApi/reducer'
import FirestoreReducer from './modules/Firestore/reducer'

export default combineReducers({
  hirezApi: HirezApiReducer,
  firestore: FirestoreReducer
})
