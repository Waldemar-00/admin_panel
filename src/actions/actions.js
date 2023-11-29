import { createAction } from "@reduxjs/toolkit"
export const heroesFetching = createAction('HEROES_FETCHING')
export const heroesFetched = createAction('HEROES_FETCHED')
export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')
export const deleteHeroes = createAction('DELETE_HERO')
export const addHeroes = createAction('ADD_HERO')
export const getFilters = createAction('GET_FILTERS')
export const filtered = createAction('FILTERED')
export const fetchHeroes = (request, url) => (dispatch) => {
  dispatch(heroesFetching())
  request(url)
    .then(data => {
      if (data === null) data = []
      dispatch(heroesFetched(data))
    })
    .catch(() => dispatch(heroesFetchingError()))
}
export const getFiltersRequest = (request, url) => (dispatch) => {
  request(url)
    .then(data => {
      dispatch(getFilters(data))
    })
} 