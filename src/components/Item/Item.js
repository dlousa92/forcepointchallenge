import React, { Component } from 'react'
import './Item.css'

let className

class Item extends Component {
  render () {
    // This will contain all of the info for an individual person
    const person = this.props.person
    return (
      <div className={className}>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <p>{person.category}</p>
      </div>
    )
  }

  componentWillMount () {
    const person = this.props.person

    // This functions purpose is to set the background color of the individual person dynamically by
    // checking the persons priority attribute and setting that color conditionally based on it's value.
    function setClassName () {
      if (person.priority === 1) {
        className = 'personitem orange'
        console.log(className)
      } else if (person.priority === 2) {
        className = 'personitem green'
      } else if (person.priority === 3) {
        className = 'personitem blue'
      } else if (person.priority === 4) {
        className = 'personitem purple'
      }
    }
    setClassName()
  }
}

export default Item
