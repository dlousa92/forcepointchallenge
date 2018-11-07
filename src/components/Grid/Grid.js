import React, { Component } from 'react'

import Single from '../Single/Single'

// The Grid will display all of the Single items inside of it

class Grid extends Component {
  render () {
    return (
      <div className='App'>
        <p>
          Hello, I am the grid
        </p>

        <Single />
      </div>
    )
  }
}

export default Grid
