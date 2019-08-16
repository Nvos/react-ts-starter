---
to: "<%=h.joinPath(location, 'index.ts')%>"
before: // Inject epic
inject: true
---
  ...Object.values(<%=name%>Epics || {}),