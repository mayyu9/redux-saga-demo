import { call, put, takeEvery } from 'redux-saga/effects';
import { requestDog, requestDogSuccess, requestDogError } from './Actions';
import { FETCHED_DOG } from './constants';

// Sagas
function* fetchDogAsync() {
  console.log("executing saga")
  try {
    console.log("calling request dog action");
    yield put(requestDog());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
      }
    );
    console.log("data: "+JSON.stringify(data));
    yield put(requestDogSuccess(data));
  } catch (error) {
    console.log("error-: "+JSON.stringify(error));
    yield put(requestDogError());
  }
}

/* watcher saga watches for FETCHED_DOG action to be triggered*/
function* watchFetchDog() {
  console.log("Watcher Saga");
  yield takeEvery(FETCHED_DOG, fetchDogAsync);
}

export { fetchDogAsync };
export default [watchFetchDog];
