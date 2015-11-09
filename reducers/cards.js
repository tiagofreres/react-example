import * as ActionTypes from '../constants/CardActionsTypes'
import update from 'react-addons-update'
import createReducer from '../utils/createReducer.js'

const cardActions = {
  [ActionTypes.SELECT_CARD](state, action) {
    return state.map(card => (
      card.id === action.id ?
        update(card, { selected: { $apply: selected => !selected } }) :
        card
    ));
  },
  [ActionTypes.CHOOSE_CARD](state, action) {
    return state.map(card => (
      card.id === action.id ?
        update(card, { choosed: { $set: true } }) :
        update(card, { choosed: { $set: false } })
    ));
  }
};

export default createReducer([], cardActions);
