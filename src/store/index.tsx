import {
  createStore,
  applyMiddleware,
  Reducer,
  combineReducers,
  Middleware,
} from 'redux';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { injectEpic as injectStandardEpic, rootEpic } from './root-epic';
import { hotReloadingEpic, injectEpic as injectHmrEpic } from './hmr-epic';
import createThunkMiddleware from 'redux-thunk';
import { composeEnhancers } from './utils';
import { dependencies } from '@/shared';
import { rootReducer, rootAction } from './slice';

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

// FIX: Strange typing problem (for now untyped)
let injectEpic: (epic: Epic) => void;
if (process.env.NODE_ENV !== 'production') {
  epicMiddleware.run(hotReloadingEpic as any);
  injectEpic = injectHmrEpic;
} else {
  epicMiddleware.run(rootEpic as any);
  injectEpic = injectStandardEpic;
}

function injectReducer(key: string, asyncReducer: Reducer) {
  // eslint-disable-next-line no-console
  console.log('Injecting', key);
  asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(asyncReducers));
}

export default store;
export { injectReducer, injectEpic, rootAction };
