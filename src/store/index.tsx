import {
  createStore,
  applyMiddleware,
  Reducer,
  combineReducers,
  Middleware,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createThunkMiddleware from 'redux-thunk';
import { injectEpic as injectStandardEpic, rootEpic } from './root-epic';
import { hotReloadingEpic, injectEpic as injectHmrEpic } from './hmr-epic';
import { composeEnhancers } from './utils';
import { rootReducer } from './slice';
import { dependencies } from '@/shared';

const asyncReducers: { [key: string]: Reducer } = {};

const thunkMiddleware = createThunkMiddleware.withExtraArgument(dependencies);
const epicMiddleware = createEpicMiddleware({ dependencies });

const middlewares: Middleware[] = [thunkMiddleware, epicMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

function createReducer(toInject?: { [key: string]: Reducer }) {
  return combineReducers({
    ...rootReducer,
    ...toInject,
  });
}

const store = createStore(createReducer(), {}, enhancer);

// FIX: Strange typing problem (for now untyped as typing root epic is problematic)
const injectEpic =
  process.env.NODE_ENV === 'development' ? injectHmrEpic : injectStandardEpic;
if (process.env.NODE_ENV === 'development') {
  epicMiddleware.run(hotReloadingEpic as any);
} else {
  epicMiddleware.run(rootEpic as any);
}

function injectReducer(key: string, asyncReducer: Reducer) {
  console.log('Injecting', key);
  asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(asyncReducers));
}

export default store;
export { injectReducer, injectEpic };
