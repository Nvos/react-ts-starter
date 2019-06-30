---
to: src/routes/Router.tsx
inject: true
after: '<Switch>'
---
        <Route path="/<%=h.inflection.dasherize(name.toLowerCase())%>" component={<%= h.changeCase.pascal(name) %>Router} />