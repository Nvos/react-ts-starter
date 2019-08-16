---
to: "<%=h.joinPath(location, 'index.tsx')%>"
inject: true
append: true
unless_exists: false
skip_if: './<%=name%>'
---
export * from './<%=name%>';