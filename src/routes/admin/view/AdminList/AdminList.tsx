import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AdminAction } from 'Types';
import { socketConnect, socketDisconnect } from '@/store/slice/global.action';

const AdminList: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(socketConnect())}>
        SUB
      </button>

      <button type="button" onClick={() => dispatch(socketDisconnect())}>
        UNSUB
      </button>
    </>
  );
};

export default AdminList;
