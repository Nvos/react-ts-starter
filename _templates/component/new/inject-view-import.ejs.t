---
to: "<%= h.isView(location) ? h.joinPath(location, '..', '/Router.tsx') : null %>"
inject: true
prepend: true
skip_if: './view'
---
import * as Views from './view';