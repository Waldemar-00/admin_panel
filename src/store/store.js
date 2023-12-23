import { configureStore } from '@reduxjs/toolkit'
import heroes from '../components/heroesList/heroesSlice'
import filters from '../components/heroesFilters/filtersSlice'
import { api_Slice } from '../api/api_Slice'
// import {setupListeners} from '@reduxjs/toolkit/query/react'

const customStringMiddleware = () => (next) => (action) => {      // the store is the first function ({ dispatch, getState })
  return typeof action === 'string' ? next({ type: action }) : next(action) // next is a dispatch
}
const store = configureStore({
  reducer: {
    [api_Slice.reducerPath]: api_Slice.reducer,
    heroes, filters
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customStringMiddleware, api_Slice.middleware),
  devTools: process.env.NODE_ENV !== 'production', // or true for all 
  
})
// setupListeners(store.dispatch)
export default store 