import React, { Component, PropTypes } from 'react'

class Header extends Component {
  
  static propTypes = {
    currentTab: PropTypes.object.isRequired
  }

  render() {
    const { currentTab } = this.props
    return(
      <h1 className='title'>
        { currentTab.title }
      </h1>
    )
  }
}

export default Header
