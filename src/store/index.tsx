import { createStore, applyMiddleware, Reducer, combineReducers } from 'redux';
import rootReducer from './root-reducer';
import { composeEnhancers } from './utils';

const asyncReducers: { [key: string]: Reducer } = {};

const middlewares: any[] = [];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(createReducer(), {}, enhancer);

function createReducer(asyncReducers?: { [key: string]: Reducer }) {
  return combineReducers({
    ...rootReducer,
    ...asyncReducers,
  });
}

function injectReducer(key: string, asyncReducer: Reducer) {
  console.log('Injecting', key);
  asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(asyncReducers));
}

export default store;
export { injectReducer };
