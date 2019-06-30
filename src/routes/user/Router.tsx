import * as Views from './view';
import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { NotFound } from '@/components';

type Props = RouteComponentProps;

const Router: FC<Props> = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/list`} component={Views.UserList} />
      <Route path={`${match.path}/create`} component={Views.UserCreate} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default hot(Router);
