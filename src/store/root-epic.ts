import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';

const epic$ = new BehaviorSubject(combineEpics());
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootEpic = (action$: any, state$: any, dep: any) =>
  epic$.pipe(mergeMap(epic => epic(action$, state$, dep)));

export default rootEpic;
