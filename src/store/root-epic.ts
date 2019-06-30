import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { combineEpics, Epic } from 'redux-observable';
import { rootEpic as rootEpicValues } from './slice';
import { RootEpic } from 'Types';
const values = Object.values(rootEpicValues);
console.log(values);
// FIX: Strange typing problem (for now untyped)
const epic$ = new BehaviorSubject(
  combineEpics(...(Object.values(rootEpicValues) as Array<RootEpic>)),
);

const rootEpic: RootEpic = (action$, state$, dependencies) =>
  epic$.pipe(mergeMap(epic => epic(action$, state$, dependencies)));

function injectEpic(epic: Epic) {
  console.log('Injecting epic', epic);
  epic$.next(epic);
}

export { injectEpic, rootEpic };
