import React, { Component } from 'react'

// A Single component is a component that will be populated by one person

class Single extends Component {
  render () {
    return (
      <div className='App'>
        <p>{this.props.person.name}</p>
        <p>{this.props.person.age}</p>
        <p>{this.props.person.category}</p>
      </div>
    )
  }
}

export default Single
