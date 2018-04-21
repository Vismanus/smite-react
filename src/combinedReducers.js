import { combineReducers } from 'redux'
import HirezReducer from './modules/Hirez/reducer'

export default combineReducers({
  teams: HirezReducer
})
