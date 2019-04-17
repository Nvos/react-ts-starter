import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { AdminList, AdminCreate } from './view';
import { injectReducer } from '@/store';
import { adminSlice } from './slice';

injectReducer('admin', adminSlice);

interface Props extends RouteComponentProps {}

const Router: FC<Props> = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/list`} component={AdminList} />
        <Route path={`${match.path}/create`} component={AdminCreate} />
      </Switch>
    </div>
  );
};

export default hot(Router);
