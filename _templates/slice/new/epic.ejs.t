---
to: "<%=h.joinPath(location, name, name + '.epic.ts')%>"
---
import {
  filter,
  tap,
  ignoreElements,
  switchMap,
  map,
  catchError,
  takeUntil,
} from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import * as actions from './<%=name%>.action';

export {};
