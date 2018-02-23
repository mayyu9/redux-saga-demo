import { REQUESTED_DOG, REQUESTED_DOG_SUCCEEDED, REQUESTED_DOG_FAILED, FETCHED_DOG } from './constants';

// Action Creators
export function requestDog () {
  console.log("inisde requestDog action");
  return { type: REQUESTED_DOG }
};

export function requestDogSuccess (data) {
  console.log("inisde requestDogSuccess action: "+JSON.stringify(data));
  return { type: REQUESTED_DOG_SUCCEEDED, url: data.message }
};

export function requestDogError (){
  return { type: REQUESTED_DOG_FAILED }
};

export function fetchDog () {
  console.log("Action- fetchdog");
  return { type: FETCHED_DOG }
};
