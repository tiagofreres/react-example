/* eslint-disable */
import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const initialState = {
  cards: [
    {
      id: 1,
      source: '/static/assets/basic/1.png',
      name: 'HearthStone Card',
      selected: false,
      choosed: false
    }
  ]
};

const store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
