---
to: src/routes/Router.tsx
inject: true
prepend: true
---
import <%= h.changeCase.pascal(name) %>Router from './<%=name%>';