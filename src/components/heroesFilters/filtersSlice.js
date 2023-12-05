import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/http.hook'

const filtersAdapter = createEntityAdapter()
const initialState = filtersAdapter.getInitialState({
  filters: [],
  filtered: [],
  url: "https://admin-panel-fcc34-default-rtdb.firebaseio.com/filters.json"
})
export const filtersRequest = createAsyncThunk(
  'filters/filtersRequest',
  () => {
    const { request } = useHttp()
    return request("https://admin-panel-fcc34-default-rtdb.firebaseio.com/filters.json")
  }
)
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getFilters(state, action) { state.filters = action.payload },
    filtered(state, action) { state.filtered = action.payload }
  },
  extraReducers: builder => {
    builder.addCase(filtersRequest.pending, () => { })
      .addCase(filtersRequest.fulfilled, (state, action) => { state.filters = action.payload })
      .addCase(filtersRequest.rejected, () => { })
      .addDefaultCase(() => { })
  }
})
const { actions, reducer } = filtersSlice

export const {
  getFilters,
  filtered
} = actions
export default reducer
export const filtersSelectors = filtersAdapter.getSelectors(state => state.filters)