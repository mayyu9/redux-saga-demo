import { REQUESTED_DOG, REQUESTED_DOG_SUCCEEDED, REQUESTED_DOG_FAILED, FETCHED_DOG } from './constants';

// Action Creators
export function requestDog () {
  return { type: REQUESTED_DOG }
};

export function requestDogSuccess (data) {
  return { type: REQUESTED_DOG_SUCCEEDED, url: data.message }
};

export function requestDogError (){
  return { type: REQUESTED_DOG_FAILED }
};

export function fetchDog () {
  return { type: FETCHED_DOG }
};
