import React, { Component } from 'react'
import './Main.css'

import Grid from '../Grid/Grid'
import Header from '../Header/Header'

class Main extends Component {
  render () {
    return (
      <div className='main'>
        <Header {...this.props} />
        <Grid {...this.props} />
      </div>
    )
  }
}

export default Main
