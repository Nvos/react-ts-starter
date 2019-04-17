import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { UserList, UserCreate } from './view';

interface Props extends RouteComponentProps {}

const Router: FC<Props> = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/list`} component={UserList} />
        <Route path={`${match.path}/create`} component={UserCreate} />
      </Switch>
    </div>
  );
};

export default hot(Router);
