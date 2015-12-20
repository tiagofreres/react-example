import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { SHOW_ALL } from './actionTypes/CardFilterTypes'

const initialState = {
  filteredView: SHOW_ALL,
  cards: [
    {
      id: 1,
      source: '/static/assets/basic/1.png',
      name: 'HearthStone Card',
      selected: false,
      choosed: false,
    },
    {
      id: 2,
      source: '/static/assets/basic/15.png',
      name: 'HearthStone Card',
      selected: false,
      choosed: false,
    },
  ],
};

const store = createStore(initialState, rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
