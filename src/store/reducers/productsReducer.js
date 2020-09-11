const initialState = {
  products: {},
  product: {}
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
      return state;

    case 'FETCH_PRODUCT_SUCCESS':
      return Object.assign({}, state, {product: action.payload});

    case 'FETCH_PRODUCT_ERROR':
      return state;

    default:
      return state;
  }
}
