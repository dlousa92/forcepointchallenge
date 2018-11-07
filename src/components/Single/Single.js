import React, { Component } from 'react'
import './Single.css'

// A Single will be populated by one person

class Single extends Component {
  render () {
    const person = this.props.person

    return (
      <div className='App'>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <p>{person.category}</p>
      </div>
    )
  }
}

export default Single
