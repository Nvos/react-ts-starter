---
to: "<%=h.joinPath(location, 'index.ts')%>"
before: // Inject reducer
inject: true
---
  <%=name%>: <%=name%>Reducer,