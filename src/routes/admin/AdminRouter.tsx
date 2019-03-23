import React, { FC } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import AdminList from './view/AdminList';
import AdminCreate from './view/AdminCreate';
import { injectReducer } from '@/store';
import { adminSlice } from './slice';

injectReducer('admin', adminSlice);

interface Props extends RouteComponentProps {}

const AdminRouter: FC<Props> = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/list`} component={AdminList} />
        <Route path={`${match.path}/create`} component={AdminCreate} />
      </Switch>
    </div>
  );
};

export default AdminRouter;
