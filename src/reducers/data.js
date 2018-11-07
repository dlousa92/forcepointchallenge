// a reducer takes in two things, it takes in the action and it also takes in a copy of current state

function data (state = [], action) {
  console.log(state, action)

  switch (action.type) {
    case 'SORT_BY_DEFAULT':
    // return updated state
      console.log('I am sorting the data by default order')
      break
    case 'SORT_ALPHABETICALLY':
    // return updated state
      console.log('I am sorting the data alphabetically')
      break
    case 'SORT_BY_PRIORITY':
      // return updated state
      console.log('I am sorting the data by priority order')
      break
    default:
      return state
  }
  return state
}

export default data
