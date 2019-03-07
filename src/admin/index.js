import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import App from './App'

const store = createStore(
  rootReducer,
  { 
  	view: 'catalog',
  	catalog: {
      content: {
        view: 'list'
      }
    },
  	auctions: {
      content: {
        view: 'list'
      }
    },
    modules: {
      content: {
        view: 'list'
      }
    }
  },
  applyMiddleware( thunkMiddleware )
)


document.addEventListener("DOMContentLoaded", () => 
	render(
	  <Provider store={store}>
	  	<App />
	  </Provider>,
	  document.getElementById('root')
	)
)