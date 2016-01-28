import React, { Component, PropTypes } from 'react'

class Tab extends Component {
  
  static propTypes = {
    tab: PropTypes.object.isRequired,
    changeTab: PropTypes.func.isRequired
  }

  render() {
    const { tab } = this.props
    return(
      <li>
        <a onClick={() => { this.props.changeTab(tab)} }>
          { tab.title }
          <span className="small"> {tab.text} </span>
        </a>
      </li>
    )
  }
}

export default Tab
