import { webSocket } from 'rxjs/webSocket';
import { RootEpic, RootAction } from 'Types';
import { ofType, ActionsObservable } from 'redux-observable';
import { isActionOf, getType } from 'typesafe-actions';
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
  merge,
} from 'rxjs/operators';
import { timer, fromEvent, of, concat } from 'rxjs';
import {
  socketConnect,
  socketDisconnect,
  socketMessage,
  socketConnectionDropped,
  socketReconnected,
  socketEmit,
} from '../global.action';

const socket$ = webSocket({ url: 'ws://localhost:3002' });

const retry = retryWhen(errors =>
  errors.pipe(
    tap(err => {
      console.error('Got error', err);
    }),

    delay(1000),
  ),
);

const incoming$ = (action$: ActionsObservable<RootAction>) =>
  socket$.pipe(
    takeUntil(action$.pipe(filter(isActionOf(socketDisconnect)))),
    startWith(socketReconnected()),
    retry,
    map(action => {
      if (isActionOf(socketReconnected, action as any))
        return socketReconnected();

      return socketMessage();
    }),
    catchError(_ => {
      return of(socketConnectionDropped());
    }),
  );

const outgoing$ = (action$: ActionsObservable<RootAction>) =>
  action$.pipe(
    takeUntil(action$.pipe(filter(isActionOf(socketDisconnect)))),
    filter(action => isActionOf(socketEmit, action)),
    tap(action => {
      socket$.next(action);
    }),
    ignoreElements(),
  );

export const socketIncoming$: RootEpic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(socketConnect)),
    mergeMap(_ => incoming$(action$)),
  );

export const socketOutgoing$: RootEpic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(socketConnect)),
    mergeMap(_ => outgoing$(action$)),
  );
