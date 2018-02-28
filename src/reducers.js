import { REQUESTED_DOG, REQUESTED_DOG_SUCCEEDED, REQUESTED_DOG_FAILED } from './constants';

// Reducer
const initialState = {
  url: '',
  loading: false,
  error: false,
};
const dogReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case REQUESTED_DOG:
    newState.url = '';
    newState.loading = true;
    newState.error = false;
    return newState;

    case REQUESTED_DOG_SUCCEEDED:
    newState.url = action.url;
    newState.loading = false;
    newState.error = false;
    return newState;

    case REQUESTED_DOG_FAILED:
    newState.url = '';
    newState.loading = false;
    newState.error = false;
    return newState;
      
    default:
      return state;
  }
};

export default dogReducer;
