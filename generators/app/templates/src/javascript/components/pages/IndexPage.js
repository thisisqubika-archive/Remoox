import React, { Component } from 'react'

import Header from '../Header'
import SideNav from '../SideNav'

class IndexPage extends Component {

  constructor(props) {
    super(props)

    const tabList = [
      {
        title: 'Home',
        text: 'Home is where the heart is.'
      },
      {
        title: 'About',
        text: 'Lets talk about it.'
      },
      {
        title: 'Knock Knock',
        text: "Who's there?"
      }
    ]

    this.state = {
      tabList: tabList,
      currentTab: tabList[0]
    }
  }

  changeTab(tab) {
    this.setState({
      currentTab: tab
    })
  }

  render() {
    const { currentTab, tabList } = this.state
    console.warn(currentTab)
    return (
    <main>
      <Header currentTab={currentTab} />
      <SideNav currentTab={currentTab} tabList={tabList} changeTab={::this.changeTab} />
    </main>
    )
  }
}

export default IndexPage
