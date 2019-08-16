---
to: "<%=h.joinPath('src', 'routes', 'Router.tsx')%>"
inject: true
after: './view'
---
import <%= h.changeCase.pascal(name) %>Router from './<%=name%>';