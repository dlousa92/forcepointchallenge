// a reducer takes in two things, it takes in the action and it also takes in a copy of current state

function data (state = [], action) {
  console.log(state, action)
  return state
}

export default data
