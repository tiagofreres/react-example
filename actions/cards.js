import * as types from '../constants/CardActionsTypes'
// https://github.com/insin/redux-action-utils
import {actionCreator, optionsActionCreator} from 'redux-action-utils'

export default {
  selectCard: actionCreator(types.SELECT_CARD, 'id'),
  chooseCard: actionCreator(types.CHOOSE_CARD, 'id')
};
