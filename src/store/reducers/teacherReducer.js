// import { browserHistory } from 'react-router'

const initialState = {
  error: null,
  loaded: false,
  uploading: false,
  teacher: {},
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'LOAD_TEACHER_DATA_SUCCESS':
      return Object.assign({}, state, {...action.payload.teacher}, {error: null, loaded: true});

    case 'LOAD_TEACHER_DATA_ERROR':
      return Object.assign({}, state, {error: true, loaded: false});

    default:
      return state;
  }
}
