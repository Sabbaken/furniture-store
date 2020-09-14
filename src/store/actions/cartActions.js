export const addItem = (item) => {
  return (dispatch, getState) => {
    dispatch({type: 'ADD_ITEM', payload: {item: {...item, count: 1}}})
  }
}

export const removeItem = (item) => {
  return (dispatch, getState) => {
    dispatch({type: 'REMOVE_ITEM', payload: {item}})
  }
}

export const decreaseItem = (item) => {
  return (dispatch, getState) => {
    dispatch({type: 'DECREASE_ITEM', payload: {item}})
  }
}

export const increaseItem = (item) => {
  return (dispatch, getState) => {
    dispatch({type: 'INCREASE_ITEM', payload: {item}})
  }
}
