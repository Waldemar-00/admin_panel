export const fetchHeroes = (request, url) => (dispatch) => {
  dispatch(heroesFetching())
  request(url)
    .then(data => {
      if (data === null) data = []
      dispatch(heroesFetched(data))
    })
    .catch(() => dispatch(heroesFetchingError()))
}

export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const deleteHeroes = (heroes) => {
  return {
    type: 'DELETE_HERO',
    payload: heroes
  }
}
export const addHeroes = (heroes) => {
  return {
    type: 'ADD_HERO',
    payload: heroes
  }
}
export const getFilters = (filters) => {
  return {
    type: 'GET_FILTERS',
    payload: filters
  }
}
export const filtered = (filteredHeroes) => {
  return {
    type: 'FILTERED',
    payload: filteredHeroes
  }
}