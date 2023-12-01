import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/http.hook'
const initialState = {
  filters: [],
  filtered: [],
  url: "https://admin-panel-fcc34-default-rtdb.firebaseio.com/filters.json"
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    getFilters(state, action) { state.filters = action.payload },
    filtered(state, action) { state.filtered = action.payload }
  }
})
const { actions, reducer } = filtersSlice

export const {
  getFilters,
  filtered
} = actions
export default reducer