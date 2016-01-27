import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { persistState } from 'redux-devtools'
import { reduxReactRouter } from 'redux-router'
import { createHistory, useBasename } from 'history'

import middlewares from './middlewares'
import routes from './routes'
import * as reducers from './reducers'


const createHistoryWithBaseName = (historyOptions) => {
  return useBasename(createHistory)({
    basename: '/',
    ...historyOptions
  })
}

let finalCreateStore = createStore

finalCreateStore = compose(
  applyMiddleware(...middlewares),
  reduxReactRouter({
    routes,
    createHistory: createHistoryWithBaseName
  })
)(finalCreateStore)

const store = finalCreateStore(combineReducers(reducers))

export default store
