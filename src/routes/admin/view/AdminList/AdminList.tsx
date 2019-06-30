import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AdminAction } from 'Types';

const AdminList: FC = () => {
  const dispatch = useDispatch<AdminAction>();
  return <div>AdminList</div>;
};

export default AdminList;
