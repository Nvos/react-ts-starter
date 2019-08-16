import React, { FC } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import UserRouter from './user';
import AdminRouter from './admin';
import { NotFound } from '@/component';
import * as navigation from './root.routes';

type Props = {};

const Router: FC<Props> = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/user/list">User/List</Link>
          </li>
          <li>
            <Link to="/user/create">User/Create</Link>
          </li>
          <li>
            <Link to="/admin/list">Admin/List</Link>
          </li>
          <li>
            <Link to="/admin/create">Admin/Create</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={navigation.USER_ROUTER} component={UserRouter} />
        <Route path={navigation.ADMIN_ROUTER} component={AdminRouter} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default hot(Router);
