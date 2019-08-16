---
to: "<%=h.joinPath(location, 'index.ts')%>"
after: redux
inject: true
---
import { <%=name%>Actions, <%=name%>Epics, <%=name%>Reducer } from './<%=name%>';