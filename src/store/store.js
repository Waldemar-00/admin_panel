import { configureStore } from '@reduxjs/toolkit'
import heroes from '../components/heroesList/heroesSlice'
import filters from '../components/heroesFilters/filtersSlice'


const customStringMiddleware = () => (next) => (action) => {      // the store is the first function ({ dispatch, getState })
  return typeof action === 'string' ? next({ type: action }) : next(action) // next is a dispatch
}
const store = configureStore({
  reducer: { heroes, filters },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customStringMiddleware),
  devTools: process.env.NODE_ENV !== 'production', // or true for all 
  
})
export default store 