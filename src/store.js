import { createStore, compose } from 'redux'

// import root reducer
import rootReducer from './reducers/index'

// import default data
import data from './data/data'

// create an object for the default data
const defaultState = {
  data: data
}

const store = createStore(rootReducer, defaultState)

export default store
