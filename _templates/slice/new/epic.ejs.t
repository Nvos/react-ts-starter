---
to: <%=location%>/<%=name%>/epic.ts
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
import * as actions from './action';
import { from, of } from 'rxjs';
