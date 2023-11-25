const initialState = {
  filters: [],
  filtered: [],
  url: "https://admin-panel-fcc34-default-rtdb.firebaseio.com/filters.json"
}

const filtered = (state = initialState, action) => {
  switch (action.type) {
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

export default filtered 