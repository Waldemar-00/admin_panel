import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/http.hook'

const filtersAdapter = createEntityAdapter()
const initialState = filtersAdapter.getInitialState({
  filters: [],
  filtered: [],
  url: "https://fake-api-dfaa6-default-rtdb.firebaseio.com/filters.json"
})
export const filtersRequest = createAsyncThunk(
  'filters/filtersRequest',
  () => {
    const { request } = useHttp()
    return request("https://fake-api-dfaa6-default-rtdb.firebaseio.com/filters.json")
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
export const { getFilters, filtered } = filtersSlice.actions
export default filtersSlice.reducer
export const filtersSelectors = filtersAdapter.getSelectors(state => state.filters)