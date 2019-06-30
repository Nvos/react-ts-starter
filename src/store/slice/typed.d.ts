declare module 'Types' {
  import { StateType, ActionType } from 'typesafe-actions';
  import { Epic } from 'redux-observable';

  export type RootAction = ActionType<typeof import('./').rootAction>;
  export type RootState = StateType<typeof import('./').rootReducer>;
  export type RootEpic = Epic<RootAction, RootAction, RootState, Dependencies>;
}
