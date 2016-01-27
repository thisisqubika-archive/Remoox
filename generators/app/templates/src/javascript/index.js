import 'babel-polyfill'
import React from 'react'

import { render } from 'react-dom'
require('../stylesheets/app.css')

import $ from 'jquery'
import <%= appname %> from './components/BaseComponent'

$(() => {
  render((
    < <%= appname %> />
    ), document.getElementById('root'))
})
