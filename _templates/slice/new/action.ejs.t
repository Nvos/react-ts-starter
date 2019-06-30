---
to: <%=location%>/<%=name%>/action.ts
---
import * as constants from './constant';
import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import {} from 'Models';

export const <%=name%>Reset = createStandardAction(constants.<%=h.changeCase.upper(name)%>_RESET)<
  undefined
>();
