const initialState = {
  cart: [1]
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {...action.payload.teacher}, {error: null, loaded: true});

    case 'REMOVE_ITEM':
      return Object.assign({}, state, {error: true, loaded: false});

    case 'INCREASE_ITEM':
      return Object.assign({}, state, {error: true, loaded: false});

    case 'DECREASE_ITEM':
      return Object.assign({}, state, {error: true, loaded: false});

    default:
      return state;
  }
}
