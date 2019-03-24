import React, { FC } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import user from './user';
import admin from './admin';

interface Props {}

const RootRouter: FC<Props> = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/user/list'}>User/List</Link>
          </li>
          <li>
            <Link to={'/user/create'}>User/Create</Link>
          </li>
          <li>
            <Link to={'/admin/list'}>Admin/List</Link>
          </li>
          <li>
            <Link to={'/admin/create'}>Admin/Create</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={'/user'} component={LoadableUserRouter} />
        <Route path={'/admin'} component={LoadableAdminRouter} />
      </Switch>
    </div>
  );
};

export default RootRouter;
