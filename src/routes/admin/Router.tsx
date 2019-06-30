import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import * as Views from './view';
import { bootstrap } from './slice';
import { NotFound } from '@/components';

bootstrap();

type Props = RouteComponentProps;

const Router: FC<Props> = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/list`} component={Views.AdminList} />
      <Route path={`${match.path}/create`} component={Views.AdminCreate} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default hot(Router);
