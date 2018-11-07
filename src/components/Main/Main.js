import React, { Component } from 'react'
import './Main.css'

import Grid from '../Grid/Grid'

class Main extends Component {
  render () {
    return (
      <div className='App'>
        <Grid {...this.props} />
      </div>
    )
  }
}

export default Main
