import React, { Component } from 'react'
import './Grid.css'

import Item from '../Item/Item'

// The Grid will display all of the Item person items inside of it

class Grid extends Component {
  render () {
    return (
      <div className='container'>
        <div className='grid'>
          {this.props.data.map((person, i) => <Item className='griditem' person={person} key={i} i={i} />)}
        </div>
      </div>
    )
  }
}

export default Grid
