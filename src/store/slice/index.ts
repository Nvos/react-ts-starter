import { combineReducers } from 'redux';
import { Epic } from 'redux-observable';
import * as globalActions from './global.action';
const rootReducer = combineReducers({
  // Inject reducer (DO NOT REMOVE)
});

const rootAction = {
  global: globalActions,
  // Inject action (DO NOT REMOVE)
};

const rootEpic = {
  // Inject epic (DO NOT REMOVE)
};

export { rootReducer, rootAction, rootEpic };
