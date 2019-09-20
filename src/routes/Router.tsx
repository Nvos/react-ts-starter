import React, { FC } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import UserRouter from './user';
import AdminRouter from './admin';
import { NotFound, InputFloat } from '@/component';
import * as navigation from './root.routes';
import { Form, Field } from 'react-final-form';

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
      <Form
        initialValues={{ field1: 15.2 }}
        onSubmit={console.log}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field name="field1">
                {({ input }) => (
                  <InputFloat
                    resolution={0.003}
                    max={30.0}
                    min={15}
                    name={input.name}
                    value={input.value}
                    onChange={input.onChange}
                  />
                )}
              </Field>
            </form>
          );
        }}
      />
      <Switch>
        <Route path={navigation.USER_ROUTER} component={UserRouter} />
        <Route path={navigation.ADMIN_ROUTER} component={AdminRouter} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default hot(Router);
