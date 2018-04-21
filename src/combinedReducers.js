import { combineReducers } from 'redux'
import HirezReducer from './components/Hirez/reducer'

export default combineReducers({
  teams: HirezReducer
})
