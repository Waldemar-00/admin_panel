const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  filters: [],
  filtered: [],
  url: "https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
        return {
            ...state,
            heroesLoadingStatus: 'loading'
        }
    case 'HEROES_FETCHED':
        return {
            ...state,
            heroes: action.payload,
            heroesLoadingStatus: 'idle'
        }
    case 'HEROES_FETCHING_ERROR':
        return {
            ...state,
            heroesLoadingStatus: 'error'
        }
    case 'DELETE_HERO':
    case 'ADD_HERO':
      return {
        ...state,
        heroes: action.payload,
      }
    case 'GET_FILTERS':
      return {
        ...state,
        filters: action.payload
      }
    case 'FILTERED':
      return {
        ...state,
        filtered: action.payload
      }
    default: return state
  }
}

export default reducer 