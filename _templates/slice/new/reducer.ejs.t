---
to: "<%=h.joinPath(location, name, name + '.reducer.ts')%>"
---
import { createReducer } from 'typesafe-actions';
import {} from '@/model';
import { <%=module%>Action } from 'Types';
import * as actions from './<%=name%>.action';
import * as constants from './<%=name%>.constant';

interface State {}

const initialState: State = {};

const reducer = createReducer<State, <%=module%>Action>(initialState, {
  // Inject (DO NOT REMOVE)
})
  // Inject single (DO NOT REMOVE)
  .handleAction(actions.<%=name%>ResetAction, (state, action) => initialState);

export default reducer;
