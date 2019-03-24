import { createStore, applyMiddleware, Reducer, combineReducers } from 'redux';
import rootReducer from './root-reducer';
import createThunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
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

const middlewares: any[] = [thunkMiddleware, epicMiddleware];
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

epicMiddleware.run(rootEpic);

export default store;
export { injectReducer };
