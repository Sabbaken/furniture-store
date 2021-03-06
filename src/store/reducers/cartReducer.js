const initialState = {
  cartContent: []
}

export default (state = initialState, action) => {
  let filtered;

  switch (action.type) {
    case 'ADD_ITEM':
      filtered = state.cartContent.filter((itemFromCart) => {
        return itemFromCart.id === action.payload.item.id;
      })

      if (filtered.length === 0)
        return Object.assign({}, state, state.cartContent.push(action.payload.item));

      return Object.assign({}, state);

    case 'REMOVE_ITEM':
      filtered = state.cartContent.filter((itemFromCart) => {
        if (itemFromCart.id !== action.payload.item.id)
          return itemFromCart;
      })

      return Object.assign({}, state, filtered);

    case 'INCREASE_ITEM':
      filtered = state.cartContent.filter((itemFromCart) => {
        if ((itemFromCart.id === action.payload.item.id) && (itemFromCart.count < 99)) {
          itemFromCart.count = itemFromCart.count + 1;
          return itemFromCart;
        }

        return itemFromCart;
      })

      return Object.assign({}, state, {cartContent: filtered});

    case 'DECREASE_ITEM':
      filtered = state.cartContent.filter((itemFromCart) => {
        if ((itemFromCart.id === action.payload.item.id) && (itemFromCart.count > 0)) {

          itemFromCart.count = itemFromCart.count - 1;
          return itemFromCart;
        }

        return itemFromCart;
      })

      return Object.assign({}, state, {cartContent: filtered});

    default:
      return state;
  }
}
