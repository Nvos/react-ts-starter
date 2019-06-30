import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { combineEpics, Epic } from 'redux-observable';
import { rootEpic as rootEpicValues } from './slice';
import { RootEpic } from 'Types';

// FIX: Strange typing problem (for now untyped)
const epic$ = new BehaviorSubject(combineEpics(Object.values(rootEpicValues)));

const rootEpic = (action$: any, state$: any, dependencies: any) =>
  epic$.pipe(mergeMap((epic: any) => epic(action$, state$, dependencies)));

function injectEpic(epic: Epic) {
  console.log('Injecting epic', epic);
  epic$.next(epic as any);
}

export { injectEpic, rootEpic };
