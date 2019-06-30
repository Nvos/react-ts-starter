---
to: src/routes/<%=name%>/index.tsx
---
import loadable from '@loadable/component';

export default loadable(() => import('./Router'));
