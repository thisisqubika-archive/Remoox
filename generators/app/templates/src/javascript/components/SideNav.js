import React, { Component, PropTypes } from 'react'

import Tab from './Tab'
import Footer from './Footer'

class SideNav extends Component {
  
  static propTypes = {
    currentTab: PropTypes.object.isRequired,
    tabList: PropTypes.array.isRequired,
    changeTab: PropTypes.func.isRequired
  }

  render() {
    const { tabList, changeTab } = this.props
    return(
      <nav className="slide-nav">
        <ul>
          {
            tabList.map((tab, i) => {
              return (<Tab key={i} tab={tab} changeTab={changeTab} />)
            })
          }
        </ul>
        <Footer />
      </nav>
    )
  }
}

export default SideNav
