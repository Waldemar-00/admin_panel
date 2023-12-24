import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const heroesAdapter = createEntityAdapter()
const initialState = heroesAdapter.getInitialState({
  heroesLoadingStatus: 'idle',
  url: "https://fake-api-dfaa6-default-rtdb.firebaseio.com/heroes.json",
})
const heroesSlice = createSlice({
  name: 'heroes',
  initialState: initialState,
  reducers: {
    heroesDelete(state, action) { heroesAdapter.removeOne(state, action.payload) },
    heroesAdd(state, action) { heroesAdapter.addOne(state, action.payload) },
    heroesAllAdd(state, action){heroesAdapter.setAll(state, action.payload)}
  },
})
const { actions, reducer } = heroesSlice
export const {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroesDelete,
  heroesAdd,
  heroesAllAdd
} = actions
export default reducer

export const heroesSelectors = heroesAdapter.getSelectors(state => state.heroes)