import { createStore, combineReducers, compose, applyMiddleware } from 'redux' 
import heroes from '../reducers/heroes'
import filteres from '../reducers/filteres'

const middleware = () => (next) => (action) => {      // the store is the first function ({ dispatch, getState })
  return typeof action === 'string' ? next({ type: action }) : next(action) // next is a dispatch
}
// const enhancer = (createStore) => (...arg) => {
  // const store = createStore(...arg)
  // const prevDispatch = store.dispatch
  // store.dispatch = (action) => {
    // return typeof action === 'string' ?
      // prevDispatch({ type: action }) : prevDispatch(action)
  // }
  // return store
// }
const store = createStore(combineReducers({ heroes, filteres }),
  compose(applyMiddleware(middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  // compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
) 
export default store 