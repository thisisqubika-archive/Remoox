import 'babel-polyfill'
import React from 'react'

import { render } from 'react-dom'
require('../stylesheets/app.css')

import $ from 'jquery'
import <%= props.appName %> from './components/BaseComponent'

$(() => {
  render((
    < <%= props.appName %> />
    ), document.getElementById('root'))
})
