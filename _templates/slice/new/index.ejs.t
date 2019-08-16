---
to: "<%=h.joinPath(location, name, 'index.ts')%>"
---
import * as <%=name%>Actions from './<%=name%>.action';
import * as <%=name%>Epics from './<%=name%>.epic';
import <%=name%>Reducer from './<%=name%>.reducer';

export { <%=name%>Actions, <%=name%>Epics, <%=name%>Reducer };
