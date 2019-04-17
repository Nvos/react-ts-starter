---
to: "<%= h.isView(location) ? h.joinPath(location, '..', '/Router.tsx') : null %>"
inject: true
after: '<Switch>'
sh: eslint --fix "<%=h.joinPath(location, '..', '/Router.tsx')%>"
---
<Route path={`${match.path}/<%=h.inflection.dasherize(name.toLowerCase())%>`} component={<%=name%>} />