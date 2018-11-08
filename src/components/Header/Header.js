import React, { Component } from 'react'
import './Header.css'

// This is an empty array where we will store all category values of our data
let categoryArray = []

class Header extends Component {
  componentWillMount () {
    // This function searches through each item in our data and pulls out the category value of each item.
    // If that category value doesn't exist in our categoryArray, then we push it into that array. Repeat for each item.
    function setCategoryArray (data) {
      data.forEach(item => {
        if (categoryArray.indexOf(item.category) < 0) {
          console.log(item.category)
          categoryArray.push(item.category)
        }
      })
    }
    setCategoryArray(this.props.data)
  }

  render () {
    return (
      <div className='header'>
        <nav>
          <ul>Sort by:
            <li><button onClick={() => this.props.sortDefault()}>Default</button></li>
            <li><button onClick={() => this.props.sortAlphabetical()}>A-Z</button></li>
            <li><button onClick={() => this.props.sortPriority()}>Priority</button></li>
          </ul>
          <form>{categoryArray.map((item, i) => <label>{item}<input name='category' type='radio' value={item} /></label>)}
          </form>
        </nav>
      </div>
    )
  }
}

export default Header
