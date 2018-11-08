import React, { Component } from 'react'
import './Header.css'
import { filterByCategory } from '../../actions/actionCreators';

// This is an empty array where we will store all category values of our data
let categoryArray = []

class Header extends Component {
  componentWillMount () {
    // This function searches through each item in our data and pulls out the category value of each item.
    // If that category value doesn't exist in our categoryArray, then we add it. Repeat for each item. This allows us to dynamically generate additional category buttons if data is added with additional categorys.
    function setCategoryArray (data) {
      data.forEach(item => {
        if (categoryArray.indexOf(item.category) < 0) {
          categoryArray.push(item.category)
        }
      })
    }
    setCategoryArray(this.props.data)
  }

  render () {
    return (
      <div className='header'>
        <nav className='navbar'>
          <ul className='sortbuttons'>Sort by:
            <li><button onClick={() => this.props.sortDefault()}>Default</button></li>
            <li><button onClick={() => this.props.sortAlphabetical()}>A-Z</button></li>
            <li><button onClick={() => this.props.sortPriority()}>Priority</button></li>
          </ul>
          <form className='filterbuttons'>Filter by: {categoryArray.map((item, i) => <label key={i} >{item}<input name='category' type='radio' value={item} onClick={() => this.props.filterByCategory(item)} /></label>)}
          </form>
        </nav>
      </div>
    )
  }
}

export default Header
