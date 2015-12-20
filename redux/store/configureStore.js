import { createStore } from 'redux'
import rootReducer from '../reducers'

// L4r99WiaNImshuZyTTq7M9ty2b3fp1PlTAljsnW4dDMvzH3xxe

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
