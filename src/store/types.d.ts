declare module 'Types' {
  import { StateType, ActionType } from 'typesafe-actions';
  import { ThunkAction, ThunkDispatch } from 'redux-thunk';

  export type RootAction = ActionType<typeof import('./root-action').default>;
  export type RootState = StateType<typeof import('./root-reducer').default>;
  export interface Dependencies {
    api: typeof import('@/api').default;
    service: typeof import('@/service').default;
  }

  export type ThunkResult<R> = ThunkAction<
    R,
    RootState,
    Dependencies,
    RootAction
  >;

  export type Dispatch = ThunkDispatch<RootState, Dependencies, RootAction>;
}
