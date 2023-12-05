import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/http.hook'

const heroesAdapter = createEntityAdapter()
const initialState = heroesAdapter.getInitialState({
  heroesLoadingStatus: 'idle',
  url: "https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json",
})
export const heroesFetch = createAsyncThunk( //! It will return three functions: pending, fulfilled, rejected
  'heroes/heroesFetch',
  () => {
    const { request } = useHttp()
    return request("https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json")
  }
)
const heroesSlice = createSlice({
  name: 'heroes',
  initialState: initialState,
  reducers: {
    heroesDelete(state, action) { heroesAdapter.removeOne(state, action.payload) },
    heroesAdd(state, action) { heroesAdapter.addOne(state, action.payload) },
  },
  extraReducers: builder => {
    builder
      .addCase(heroesFetch.pending, state => { state.heroesLoadingStatus = 'loading' })
      .addCase(heroesFetch.fulfilled, (state, action) => {
        state.heroesLoadingStatus = 'idle'
        //! state.heroes = action.payload
        heroesAdapter.setAll(state, action.payload)
      })
      .addCase(heroesFetch.rejected, state => { state.heroesLoadingStatus = 'error' })
      .addDefaultCase(() => { })
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

export const heroesSelectors = heroesAdapter.getSelectors(state => state.heroes)