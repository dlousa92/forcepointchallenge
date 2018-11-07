import React, { Component } from 'react'
import './Header.css'

import Grid from '../Grid/Grid'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <nav>
          <ul>Sort by:
            <li><button onClick={() => this.props.sortDefault()}>Default</button></li>
            <li><button onClick={() => this.props.sortAlphabetical()}>A-Z</button></li>
            <li><button onClick={() => this.props.sortPriority()}>Priority</button></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
