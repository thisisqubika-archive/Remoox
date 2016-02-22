import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import loadTabs from '../../actions/loadTabs'
import changeTab from '../../actions/changeTab'

import Header from '../Header'
import SideNav from '../SideNav'

class IndexPage extends Component {
  static propTypes = {
    currentTab: PropTypes.object,
    tabList: PropTypes.array,
    dispatch: PropTypes.func
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadTabs())
  }

  changeTab(tab) {
    const { dispatch } = this.props
    dispatch(changeTab(tab))
  }

  render() {
    const { currentTab, tabList } = this.props
    return (
    <main>
      <Header currentTab={currentTab} />
      <SideNav currentTab={currentTab} tabList={tabList} changeTab={::this.changeTab} />
    </main>
    )
  }
}

const select = (state) => {
  const { tabList, currentTab } = state
  return {
    currentTab: currentTab,
    tabList: tabList && Array.isArray(tabList) ? tabList : []
  }
}

export default connect(select)(IndexPage)