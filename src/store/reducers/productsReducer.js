const initialState = {
  products: {}
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_CATEGORY_SUCCESS':
      return Object.assign({}, state, {
        products: {
          ...state.products,
          [action.payload.sectionName]: action.payload.section
        }
      });

    case 'FETCH_CATEGORY_ERROR':
      return Object.assign({}, state, {...action.payload.teacher});

    default:
      return state;
  }
}
