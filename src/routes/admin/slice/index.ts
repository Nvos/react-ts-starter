import { combineReducers } from 'redux';
import { injectReducer, injectEpic } from '@/store';
import { Epic } from 'redux-observable';

const rootReducer = combineReducers({
  // Inject reducer (DO NOT REMOVE)
});

const rootActions = {
  // Inject action (DO NOT REMOVE)
};

function bootstrap() {
  injectReducer('admin', rootReducer);
}

export { rootReducer, rootActions, bootstrap };
