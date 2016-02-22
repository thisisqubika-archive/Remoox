import React from 'react'
import { IndexRedirect, Route } from 'react-router'

import App from './components/containers/App'

import IndexPage from './components/pages/IndexPage'

const routes = (
<Route path='/' component={App}>
  <IndexRedirect to='index' />
  <Route path='index' components={IndexPage} />
</Route>
)

export default routes
