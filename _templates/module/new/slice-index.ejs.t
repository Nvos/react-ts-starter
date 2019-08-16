---
to: "<%=h.joinPath('src', 'routes', name, 'slice', 'index.ts')%>"
---
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // Inject reducer (DO NOT REMOVE)
});

const rootActions = {
  // Inject action (DO NOT REMOVE)
};

const rootEpics = [
  // Inject epic (DO NOT REMOVE)
];

export { rootReducer, rootActions, rootEpics };
