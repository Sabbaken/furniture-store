const initialState = {
  products: {
    trending: [],
  }
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_CATEGORY_SUCCESS':
      return Object.assign({}, state, {...action.payload.teacher}, {error: null, loaded: true});

    case 'FETCH_CATEGORY_ERROR':
      return Object.assign({}, state, {...action.payload.teacher}, {error: null, loaded: true});

    default:
      return state;
  }
}
