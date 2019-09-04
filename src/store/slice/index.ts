import { combineReducers } from 'redux';
import * as socketEpics from './socket/epic';
import * as globalActions from './global.action';

const rootReducer = {
  // Inject reducer (DO NOT REMOVE)
};

const rootActions = {
  global: globalActions,
  // Inject action (DO NOT REMOVE)
};

const rootEpics = [
  ...Object.values(socketEpics),
  // Inject epic (DO NOT REMOVE)
];

export { rootReducer, rootActions, rootEpics };
