import { call, put, takeEvery } from 'redux-saga/effects';
import { requestDog, requestDogSuccess, requestDogError } from './Actions';
import { FETCHED_DOG } from './constants';

// Sagas
function* fetchDogAsync() {

  try {
    yield put(requestDog());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
      }
    );
    yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(requestDogError());
  }
}

/* watcher saga watches for FETCHED_DOG action to be triggered*/
function* watchFetchDog() {
  yield takeEvery(FETCHED_DOG, fetchDogAsync);
}

export { fetchDogAsync };
export default [watchFetchDog];
