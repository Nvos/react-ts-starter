---
to: "<%= h.isView(location) ? h.joinPath(location, '..', '/Router.tsx') : null %>"
inject: true
after: '<Switch>'
---
<% if (h.isModuleView(location)) { -%>      <Route path={`${match.path}/<%=h.changeCase.param(h.removeViewSuffix(name))%>`} component={Views.<%=name%>} /><% } else { -%>      <Route path="/<%=h.changeCase.param(h.removeViewSuffix(name))%>" component={Views.<%=name%>} /><% } -%>