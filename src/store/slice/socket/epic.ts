import { webSocket } from 'rxjs/webSocket';
import { RootEpic } from 'Types';
import { ofType } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import {
  filter,
  mergeMap,
  ignoreElements,
  takeUntil,
  tap,
  map,
  retryWhen,
  delay,
  startWith,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { timer, fromEvent, of } from 'rxjs';
import {
  socketConnect,
  socketDisconnect,
  socketMessage,
  socketConnectionDropped,
} from '../global.action';

const socket$ = webSocket({ url: 'ws://localhost:3002' });

export const socketIncoming$: RootEpic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(socketConnect)),
    mergeMap(_ =>
      socket$.pipe(
        takeUntil(action$.pipe(filter(isActionOf(socketDisconnect)))),
        map(action => {
          console.log(action);
          return socketMessage();
        }),
        catchError(_ => {
          return of(socketConnectionDropped());
        }),
      ),
    ),
  );
