import { createReducer } from '@reduxjs/toolkit'

import {
  heroesFetching, heroesFetched, heroesFetchingError,
  deleteHeroes, addHeroes
} from '../actions/actions'

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  url: "https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json",
}
const heroes = createReducer(initialState, builder => {
  builder.addCase(heroesFetching, state => { state.heroesLoadingStatus = 'loading' })
  builder.addCase(heroesFetched, (state, action) => {
    state.heroes = action.payload
    state.heroesLoadingStatus = 'idle'
  })
    .addCase(heroesFetchingError, state => { state.heroesLoadingStatus = 'error' })
    .addCase(deleteHeroes, (state, action) => { state.heroes = action.payload })
    .addCase(addHeroes, (state, action) => { state.heroes = action.payload })
    .addDefaultCase(() => {})
    
} )

// const heroes = (state = initialState, action) => {
  // switch (action.type) {
    // case 'HEROES_FETCHING':
      // return {
        // ...state,
        // heroesLoadingStatus: 'loading'
      // }
    // case 'HEROES_FETCHED':
      // return {
        // ...state,
        // heroes: action.payload,
        // heroesLoadingStatus: 'idle'
      // }
    // case 'HEROES_FETCHING_ERROR':
      // return {
        // ...state,
        // heroesLoadingStatus: 'error'
      // }
    // case 'DELETE_HERO':
    // case 'ADD_HERO':
      // return {
        // ...state,
        // heroes: action.payload,
      // }
    // default: return state
  // }
//}

export default heroes 