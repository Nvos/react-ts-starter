---
to: "<%=h.joinPath(location, name, name + '.action.ts')%>"
---
import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import * as constants from './<%=name%>.constant';
import {} from '@/model';

export const <%=name%>ResetAction = createStandardAction(constants.<%=h.changeCase.upper(name)%>_RESET)<
  undefined
>();
