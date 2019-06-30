---
to: <%=location%>/<%=name%>/reducer.ts
---
import { createReducer } from 'typesafe-actions';
import {} from 'Models';
import * as actions from './action';
import * as constants from './constant';
import { rootAction } from '@/store';
import { <%=module%>Action } from 'Types';

interface State {}

const initialState: State = {};

const reducer = createReducer<State, <%=module%>Action>(initialState, {
  // Inject (DO NOT REMOVE)
})
  // Inject single (DO NOT REMOVE)
  .handleAction(
    [actions.bobReset, rootAction.global.resetAll],
    (state, action) => initialState,
  );

export default reducer;
