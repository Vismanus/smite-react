import { combineReducers } from 'redux'
import reducer from './components/reducer'

export default combineReducers({
  apiConfig: reducer
})
