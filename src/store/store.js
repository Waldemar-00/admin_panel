// import { createStore, combineReducers, compose, applyMiddleware } from 'redux' 
import { configureStore } from '@reduxjs/toolkit'
import heroes from '../reducers/heroes'
import filteres from '../reducers/filteres'
// import ReduxThunk from 'redux-thunk'
// import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'


const customStringMiddleware = () => (next) => (action) => {      // the store is the first function ({ dispatch, getState })
  return typeof action === 'string' ? next({ type: action }) : next(action) // next is a dispatch
}
// const store = createStore(combineReducers({ heroes, filteres }),
  // compose(applyMiddleware(ReduxThunk, middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
const store = configureStore({
  reducer: { heroes, filteres },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customStringMiddleware),
  devTools: process.env.NODE_ENV !== 'production', // or true for all 
  
})
export default store 