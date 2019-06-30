import StatisticRouter from './statistic';
import React, { FC } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import UserRouter from './user';
import AdminRouter from './admin';
import { NotFound } from '@/components';

type Props = {};

const Router: FC<Props> = () => {
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
        <Route path="/statistic" component={StatisticRouter} />
        <Route path="/user" component={UserRouter} />
        <Route path="/admin" component={AdminRouter} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default hot(Router);
