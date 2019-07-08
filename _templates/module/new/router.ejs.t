---
to: src/routes/<%=name%>/Router.tsx
---
import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { injectReducer } from '@/store';
import { NotFound } from '@/components';
import { rootReducer } from './slice';

injectReducer('<%=name%>', rootReducer);

type Props = RouteComponentProps;

const Router: FC<Props> = ({ match }) => {
  return (
    <Switch>
      <Route component={NotFound} />
    </Switch>
  );
};

export default hot(Router);
