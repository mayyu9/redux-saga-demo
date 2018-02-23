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
    console.log("Reducer-REQUESTED_DOG");
    newState.url = '';
    newState.loading = true;
    newState.error = false;
    return newState;
      // return {
      //   url: '',
      //   loading: true,
      //   error: false,
      // };
    case REQUESTED_DOG_SUCCEEDED:
    console.log("Reducer-REQUESTED_DOG_SUCCEEDED-1: ",JSON.stringify(action)+' '+newState.url);
    newState.url = action.url;
    newState.loading = false;
    newState.error = false;
    console.log("Reducer-REQUESTED_DOG_SUCCEEDED-2: ",JSON.stringify(action)+' '+newState.url);
    return newState;
      // return {
      //   url: action.url,
      //   loading: false,
      //   error: false,
      // };
    case REQUESTED_DOG_FAILED:
    console.log("Reducer-REQUESTED_DOG_FAILED");
    newState.url = '';
    newState.loading = false;
    newState.error = false;
    return newState;
      // return {
      //   url: '',
      //   loading: false,
      //   error: true,
      // };
    default:
      return state;
  }
};

export default dogReducer;
