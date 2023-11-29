import { createReducer } from '@reduxjs/toolkit'

import { heroesFetching, heroesFetched, heroesFetchingError, deleteHeroes, addHeroes } from '../actions/actions'

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  url: "https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json",
}
// const heroes = createReducer(initialState, builder => {
  // builder.addCase('HEROES_FETCHING', state => { state.heroesLoadingStatus = 'loading' }) //! WE CAN USE action STRING!!!!
    // .addCase(heroesFetched, (state, action) => { state.heroesLoadingStatus = 'idle'; state.heroes = action.payload })
    // .addCase(heroesFetchingError, state => { state.heroesLoadingStatus = 'error' })
    // .addCase(deleteHeroes, (state, action) => { state.heroes = action.payload })
    // .addCase(addHeroes, (state, action) => { state.heroes = action.payload })
    // .addDefaultCase(() => {})
// })

const heroes = createReducer(initialState, {
  [heroesFetching]: state => { state.heroesLoadingStatus = 'loading' },
  [heroesFetched]: (state, action) => { state.heroesLoadingStatus = 'idle'; state.heroes = action.payload }, //!!  Immer is working here!!!
  [heroesFetchingError]: state => { state.heroesLoadingStatus = 'error' },
  [deleteHeroes]: (state, action) => { state.heroes = action.payload },
  [addHeroes]: (state, action) => { state.heroes = action.payload },
  },
  [], //! Array with functions of comparison
  state => state //! Default case
)
//! This sintaxis only for native JS! NOT WORK WITH TYPESCRIPT!!!!!!!!!!!!!!!
export default heroes 