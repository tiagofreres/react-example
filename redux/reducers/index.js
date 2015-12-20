import { combineReducers } from 'redux'
import cards from './cards'

const rootReducer = combineReducers({
  cards,
  filteredView: (state = '', action) => state
})

export default rootReducer
