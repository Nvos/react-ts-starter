import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { combineEpics, Epic } from 'redux-observable';
import { rootEpics as rootEpicValues } from './slice';

// FIX: Strange typing problem (for now untyped)
// ...Object.values(rootEpicValues)
const epic$ = new BehaviorSubject(combineEpics(...rootEpicValues));

const rootEpic: Epic = (action$, state$, dependencies) =>
  epic$.pipe(mergeMap(epic => epic(action$, state$, dependencies)));

function injectEpic(epic: Epic) {
  console.log('Injecting epic', epic);
  epic$.next(epic as any);
}

export { injectEpic, rootEpic };
