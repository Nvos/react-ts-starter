declare module 'Types' {
  import { Epic } from 'redux-observable';
  import { StateType, ActionType } from 'typesafe-actions';

  export type AdminState = RootState & {
    admin: StateType<typeof import('./').rootReducer>;
  };

  export type AdminAction =
    | RootAction
    | ActionType<typeof import('./').rootActions>;

  export type AdminEpic = Epic<
    AdminAction,
    AdminAction,
    AdminState,
    Dependencies
  >;
}

declare module 'Models' {
  export type User = {
    id: string;
  };
}
