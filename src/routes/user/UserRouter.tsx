import React, { FC } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import UserList from './view/UserList';
import UserCreate from './view/UserCreate';

interface Props extends RouteComponentProps {}

const UserRouter: FC<Props> = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/list`} component={UserList} />
        <Route path={`${match.path}/create`} component={UserCreate} />
      </Switch>
    </div>
  );
};

export default UserRouter;
