---
to: <%=location%>/<%=name%>/index.ts
---
import * as <%=name%>Action from './action';
import * as <%=name%>Epic from './epic';
import { default as <%=name%>Reducer } from './reducer';

export { <%=name%>Action, <%=name%>Epic, <%=name%>Reducer };
