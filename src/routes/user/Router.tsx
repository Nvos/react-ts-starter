import * as Views from './view';
import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { NotFound } from '@/components';

type Props = RouteComponentProps;

const Router: FC<Props> = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route
          path={`${match.path}/bob-amazing-user`}
          component={Views.BobAmazingUser}
        />
        <Route path={`${match.path}/userjeffo`} component={Views.UserJeffo} />
        <Route path={`${match.path}/userwow`} component={Views.UserWow} />
        <Route path={`${match.path}/list`} component={Views.UserList} />
        <Route path={`${match.path}/create`} component={Views.UserCreate} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default hot(Router);
