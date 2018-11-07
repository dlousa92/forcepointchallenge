import React, { Component } from 'react'
import './Grid.css'

import Single from '../Single/Single'

// The Grid will display all of the Single person items inside of it

class Grid extends Component {
  render () {
    return (
      <div className='App'>
        <div>
          {this.props.data.persons.map((person, i) => <Single person={person} key={i} i={i} />)}
        </div>
      </div>
    )
  }
}

export default Grid
