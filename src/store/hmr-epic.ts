import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { RootEpic } from 'Types';
import { rootEpic } from './root-epic';

const epic$ = new BehaviorSubject(rootEpic);

const hotReloadingEpic: RootEpic = (action$, state$, dependencies) =>
  epic$.pipe(switchMap(epic => epic(action$, state$, dependencies)));

function injectEpic(epic: Epic) {
  console.log('Injecting epic', epic);
  epic$.next(epic);
}

if (module.hot) {
  module.hot.accept('./root-epic', () => {
    const nextRootEpic = require('./root-epic').rootEpic;
    epic$.next(nextRootEpic);
  });
}

export { hotReloadingEpic, injectEpic };
