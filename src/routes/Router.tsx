import React, { FC, useCallback } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import UserRouter from './user';
import AdminRouter from './admin';
import { NotFound, InputFloat } from '@/component';
import * as navigation from './root.routes';
import { Form, Field } from 'react-final-form';
import { useField, CallbackFunction } from '@/component/InputFloat/useField';

type Props = {};

const Router: FC<Props> = () => {
  const callbackFn: CallbackFunction<number> = useCallback(
    event => console.log(event),
    [],
  );
  const { onChange, onBlur, onEnterPressed, value } = useField({
    name: 'Name',
    callbackFn,
    initialValue: 16,
    triggerCallbackOnChange: true,
  });
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
      <InputFloat
        resolution={0.003}
        max={30.0}
        min={15}
        name={'field'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onEnterPressed}
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
