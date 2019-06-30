---
to: "<%= h.isView(location) ? h.joinPath(location, '..', '/Router.tsx') : null %>"
inject: true
after: '<Switch>'
---
      <Route path={`${match.path}/<%=h.changeCase.param(name)%>`} component={Views.<%=name%>} />