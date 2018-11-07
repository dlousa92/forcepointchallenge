// a reducer takes in two things, it takes in the action and it also takes in a copy of current state

function data (state = [], action) {
  console.log(state, action)
  switch (action.type) {
    case 'SORT_BY_DEFAULT':
      // return updated state
      console.log('I am sorting the data by default order')
      return [

      ]
    case 'SORT_ALPHABETICALLY':
      // return updated state
      console.log(state)
      return [

      ]
    case 'SORT_BY_PRIORITY':
      return [
        // Make a copy of state and compare the priority attribute value of each item in the array. Sort in ascending order.
        ...state.sort(function (a, b) {
          if (a.priority < b.priority) {
            return -1
          } if (a.priority > b.priority) {
            return 1
          }
          return 0
        })
      ]
    default:
      return state
  }
}

export default data
