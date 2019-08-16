---
to: "<%=h.joinPath(location, name, name + '.constant.ts')%>"
---
export const <%=h.changeCase.upper(name)%>_RESET = '[<%=module%>/<%=h.changeCase.camel(name)%>] Reset';
