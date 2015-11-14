import * as types from '../constants/CardActionsTypes'
// https://github.com/insin/redux-action-utils
import {actionCreator, optionsActionCreator} from 'redux-action-utils'

export default {
  onSelectCard: actionCreator(types.SELECT_CARD, 'id'),
  onChooseCard: actionCreator(types.CHOOSE_CARD, 'id')
};
