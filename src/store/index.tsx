import {
  createStore,
  applyMiddleware,
  Reducer,
  combineReducers,
  Middleware,
} from 'redux';
import createThunkMiddleware from 'redux-thunk';
import rootReducer from './root-reducer';
import { composeEnhancers } from './utils';
import api from '@/api';
import service from '@/service';

const asyncReducers: { [key: string]: Reducer } = {};

const dependencies = {
  api,
  service,
};

const thunkMiddleware = createThunkMiddleware.withExtraArgument(dependencies);

const middlewares: Middleware[] = [thunkMiddleware];
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

export default store;
export { injectReducer };
