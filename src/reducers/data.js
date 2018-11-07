// This is the default state of the data set. It's copied here so it's possible to reset state to the default way data is ordered
const DEFAULT_STATE =
  [
    {

      'name': 'Jerry',

      'age': 39,

      'priority': 1,

      'category': 'two'

    },

    {

      'name': 'Amy',

      'age': 28,

      'priority': 4,

      'category': 'one'

    },

    {

      'name': 'Bernice',

      'age': 99,

      'priority': 2,

      'category': 'two'

    },

    {

      'name': 'Antoine',

      'age': 50,

      'priority': 1,

      'category': 'three'

    },

    {

      'name': 'Andrea',

      'age': 25,

      'priority': 1,

      'category': 'three'

    },

    {

      'name': 'Fredrick',

      'age': 44,

      'priority': 3,

      'category': 'one'

    },

    {

      'name': 'Mariel',

      'age': 34,

      'priority': 2,

      'category': 'three'

    },

    {

      'name': 'Arnold',

      'age': 74,

      'priority': 4,

      'category': 'two'

    },

    {

      'name': 'Janice',

      'age': 54,

      'priority': 2,

      'category': 'two'

    }
  ]

// Handles all actions
function data (state = [], action) {
  console.log(state, action)
  switch (action.type) {
    case 'SORT_BY_DEFAULT':

      // Default option resets store to the initial state which is declared above. Okay solution for now but shouldn't be final solution
      return [
        ...DEFAULT_STATE
      ]
    case 'SORT_ALPHABETICALLY':
      console.log(state)
      return [
        // Make a copy of state and compare the name attribute value of each item in the array. Sort by A-Z.
        ...state.sort(function (a, b) {
          if (a.name < b.name) {
            return -1
          } if (a.name > b.name) {
            return 1
          }
          return 0
        })
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
