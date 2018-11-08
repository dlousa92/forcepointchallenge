import React, { Component } from 'react'
import './Item.css'

class Item extends Component {
  render () {
    // This will contain all of the info for an individual person
    const person = this.props.person
    return (
      <div className={`${person.priority} personitem`}>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <p>{person.category}</p>
      </div>
    )
  }
}

export default Item
