import * as types from '../actionTypes/CardActionsTypes';

export default {
  onSelectCard: (id) => ({ type: types.SELECT_CARD, id }),
  onChooseCard: (id) => ({ type: types.CHOOSE_CARD, id }),
  onFetchCards: () => ({ type: types.FETCH_CARDS_REQUEST }),
  onFetchSuccess: (response) => ({ type: types.FETCH_CARDS_SUCCESS, response }),
  onFetchError: (error) => ({ type: types.FETCH_CARDS_FAILURE, error }),
};
