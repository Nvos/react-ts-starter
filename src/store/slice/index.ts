import { combineReducers } from 'redux';
import * as socketEpics from './socket/epic';
import * as globalActions from './global.action';

const rootReducer = combineReducers({
  // Inject reducer (DO NOT REMOVE)
});

const rootAction = {
  global: globalActions,
  // Inject action (DO NOT REMOVE)
};

const rootEpic = [
  ...Object.values(socketEpics),
  // Inject epic (DO NOT REMOVE)
];

export { rootReducer, rootAction, rootEpic };
