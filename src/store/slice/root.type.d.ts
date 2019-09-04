declare module 'Types' {
  import { StateType, ActionType } from 'typesafe-actions';
  import { Epic } from 'redux-observable';
  import { rootEpics, rootReducer, rootActions } from '@/store/slice';

  export type RootAction = ActionType<typeof rootActions>;
  export type RootState = StateType<typeof rootReducer>;
  export type RootEpic = Epic<RootAction, RootAction, RootState, Dependencies>;
}
