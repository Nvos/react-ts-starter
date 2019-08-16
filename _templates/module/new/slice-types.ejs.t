---
to: "<%=h.joinPath('src', 'routes', name, 'slice', 'types.d.ts')%>"
---
declare module 'Types' {
  import { StateType, ActionType } from 'typesafe-actions';
  import { rootActions, rootReducer } from '@/routes/<%=name%>/slice';

  export type <%= h.changeCase.pascal(name) %>State = RootState & {
    <%=name%>: StateType<typeof rootReducer>;
  };

  export type <%= h.changeCase.pascal(name) %>Action = RootAction | ActionType<typeof rootActions>;

  export type <%= h.changeCase.pascal(name) %>Epic = Epic<
    <%= h.changeCase.pascal(name) %>Action,
    <%= h.changeCase.pascal(name) %>Action,
    <%= h.changeCase.pascal(name) %>State,
    Dependencies
  >;
}
