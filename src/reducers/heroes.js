import { createReducer } from '@reduxjs/toolkit'

import { heroesFetching, heroesFetched, heroesFetchingError, deleteHeroes, addHeroes } from '../actions/actions'

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  url: "https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json",
}
const heroes = createReducer(initialState, builder => {
  builder.addCase(heroesFetching, state => { state.heroesLoadingStatus = 'loading' })
    .addCase(heroesFetched, (state, action) => { state.heroesLoadingStatus = 'idle'; state.heroes = action.payload })
    .addCase(heroesFetchingError, state => { state.heroesLoadingStatus = 'error' })
    .addCase(deleteHeroes, (state, action) => { state.heroes = action.payload })
    .addCase(addHeroes, (state, action) => { state.heroes = action.payload })
    .addDefaultCase(() => {})
} )
export default heroes 