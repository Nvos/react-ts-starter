// export { default as AdminRouter } from './AdminRouter';
import React from 'react';
import loadable from '@loadable/component';
import { RouteComponentProps } from 'react-router-dom';

const Loadable = loadable(() => import('./AdminRouter'));

const LoadableAdminRouter: React.FC<RouteComponentProps> = props => (
  <Loadable {...props} />
);

export { LoadableAdminRouter };
