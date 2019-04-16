import {
  createStore,
  applyMiddleware,
  Reducer,
  combineReducers,
  Middleware,
} from 'redux';
import createThunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './root-reducer';
import { composeEnhancers } from './utils';
import api from '@/api';
import service from '@/service';
import rootEpic from './root-epic';

const asyncReducers: { [key: string]: Reducer } = {};

const dependencies = {
  api,
  service,
};

const thunkMiddleware = createThunkMiddleware.withExtraArgument(dependencies);
const epicMiddleware = createEpicMiddleware({
  dependencies,
});

const middlewares: Middleware[] = [thunkMiddleware, epicMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function createReducer(toInject?: { [key: string]: Reducer }) {
  return combineReducers({
    ...rootReducer,
    ...toInject,
  });
}

const store = createStore(createReducer(), {}, enhancer);

function injectReducer(key: string, asyncReducer: Reducer) {
  // eslint-disable-next-line no-console
  console.log('Injecting', key);
  asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(asyncReducers));
}

epicMiddleware.run(rootEpic);

export default store;
export { injectReducer };
