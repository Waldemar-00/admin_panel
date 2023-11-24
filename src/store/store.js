import { createStore, combineReducers, compose } from 'redux' 
import heroes from '../reducers/heroes'
import filteres from '../reducers/filteres'
// import reducer from '../reducers/reducer' 
const enhancer = (createStore) => (...arg) => {
  const store = createStore(...arg)
  const prevDispatch = store.dispatch
  store.dispatch = (action) => {
    return typeof action === 'string' ?
      prevDispatch({ type: action }) : prevDispatch(action)
  }
  return store
}
const store = createStore(combineReducers({ heroes, filteres }), compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) 
export default store 