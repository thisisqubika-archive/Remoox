import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

import routes from '../routes'
import store from '../store'

export default class <%= appname %> extends Component {
  render() {
    return (
    <Provider store={store}>
      <div>
        <ReduxRouter>
          {routes}
        </ReduxRouter>
      </div>
    </Provider>
    )
  }
}