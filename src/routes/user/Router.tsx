import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import * as Views from './view';
import { NotFound } from '@/component';
import * as navigation from './user.routes';

type Props = RouteComponentProps;

const Router: FC<Props> = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.path}${navigation.LIST}`}
        component={Views.UserList}
      />
      <Route
        path={`${match.path}${navigation.CREATE}`}
        component={Views.UserCreate}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default hot(Router);
