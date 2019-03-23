import React from 'react';
import loadable from '@loadable/component';
import { RouteComponentProps } from 'react-router-dom';

const Loadable = loadable(() => import('./UserRouter'));

const LoadableUserRouter: React.FC<RouteComponentProps> = props => (
  <Loadable {...props} />
);

export { LoadableUserRouter };
