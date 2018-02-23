import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './DemoContainer';
import sagas from './sagas';


const sagaMiddleware = createSagaMiddleware();
const configureStore = createStore(
  combineReducers(reducer),
  applyMiddleware(sagaMiddleware)
);

sagas.map(saga => (sagaMiddleware.run(saga)));
//sagaMiddleware.run(watchFetchDog);

export default configureStore;
