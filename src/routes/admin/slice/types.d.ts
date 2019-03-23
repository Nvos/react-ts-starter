declare module 'Types' {
  import { StateType, ActionType } from 'typesafe-actions';

  export type AdminState = RootState & {
    admin: StateType<typeof import('./').adminSlice>;
  };
}
