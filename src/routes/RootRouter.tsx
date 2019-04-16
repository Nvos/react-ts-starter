import React, { FC } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import UserRouter from './user';
import AdminRouter from './admin';

interface Props {}

const RootRouter: FC<Props> = () => {
  return (
    <div>
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
        <Route path="/user" component={UserRouter} />
        <Route path="/admin" component={AdminRouter} />
      </Switch>
    </div>
  );
};

export default RootRouter;
