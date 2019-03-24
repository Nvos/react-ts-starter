import loadable from '@loadable/component';

export default loadable(() =>
  import(/* webpackChunkName: "admin-router" */
  './AdminRouter'),
);
