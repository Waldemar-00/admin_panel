import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  url: "https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json",
}
const heroesSlice = createSlice({
  name: 'heroes',
  initialState: initialState,
  reducers: {
    heroesFetching(state){ state.heroesLoadingStatus = 'loading' },
    heroesFetched(state, action){ state.heroesLoadingStatus = 'idle'; state.heroes = action.payload },
    heroesFetchingError: state => { state.heroesLoadingStatus = 'error' },
    heroesDelete: (state, action) => { state.heroes = action.payload },
    heroesAdd(state, action){ state.heroes = action.payload },
  }
})
const { actions, reducer } = heroesSlice
export const {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroesDelete,
  heroesAdd
} = actions
export default reducer