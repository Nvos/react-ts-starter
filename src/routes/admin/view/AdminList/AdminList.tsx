import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  socketConnect,
  socketDisconnect,
  socketEmit,
} from '@/store/slice/global.action';

const AdminList: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    ws.onopen = socket => {
      console.log('open', socket);
      ws.send('okokok');
    };
  }, []);

  return (
    <>
      <button type="button" onClick={() => dispatch(socketConnect())}>
        SUB
      </button>

      <button type="button" onClick={() => dispatch(socketDisconnect())}>
        UNSUB
      </button>

      <button
        type="button"
        onClick={() => dispatch(socketEmit({ name: 'Jeff' }))}
      >
        EMIT
      </button>
    </>
  );
};

export default AdminList;
