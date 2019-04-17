---
to: "<%= h.isView(location) ? h.joinPath(location, '..', '/Router.tsx') : null %>"
inject: true
after: ./view
---
import { <%=name%> } from './view';