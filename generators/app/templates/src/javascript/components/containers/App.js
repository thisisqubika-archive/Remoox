import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  static propTypes = {
    router: PropTypes.object.isRequired,
    children: PropTypes.node
  }

  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

function select (state) {
  return {
    router: state.router
  }
}

export default connect(select)(App)