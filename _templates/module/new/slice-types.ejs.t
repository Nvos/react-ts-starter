---
to: src/routes/<%=name%>/slice/types.d.ts
---
declare module 'Types' {
  import { StateType, ActionType } from 'typesafe-actions';

  export type <%= h.changeCase.pascal(name) %>State = RootState & {
    <%=name%>: StateType<typeof import('./').default>;
  };

  export type <%= h.changeCase.pascal(name) %>Action =
    | RootAction
    | ActionType<typeof import('./').rootActions>;

  export type AdminEpic = Epic<AdminAction, AdminAction, AdminState, {}>;
}
