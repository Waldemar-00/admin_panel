import { createStore, combineReducers } from 'redux' 
import heroes from '../reducers/heroes'
import filteres from '../reducers/filteres'
// import reducer from '../reducers/reducer' 

const store = createStore(combineReducers({ heroes, filteres }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

export default store 