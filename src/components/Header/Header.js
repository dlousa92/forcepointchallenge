import React, { Component } from 'react'
import './Header.css'

import Grid from '../Grid/Grid'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <nav>
          <ul>Sort by:
            <li><a href='#'>Default</a></li>
            <li><a href='#'>A-Z</a></li>
            <li><a href='#'>Priority</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
