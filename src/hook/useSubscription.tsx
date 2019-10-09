import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

type Channel<T> = {
  name: string;
  command: (props: T) => Promise<T>;
};

type Props<T> = {
  channel: Channel<T>;
  executeCommandOnSubscribe?: boolean;
  data?: T;
};

type Hook<T extends unknown> = (
  props: Props<T>,
) => {
  dispatchSubscribe: () => void;
  dispatchUnsubscribe: () => void;
};

export const useSubscription: Hook<unknown> = ({
  channel,
  executeCommandOnSubscribe = true,
  data = {},
}) => {
  const dispatch = useDispatch();

  const executeCommand = useCallback(() => {
    setTimeout(() => {
      channel.command(data);
    }, 25);
  }, [channel, data]);

  const dispatchSubscribe = useCallback(() => {
    dispatch({
      type: 'Subscribe',
      payload: {
        channel: channel.name,
      },
    });
  }, [channel, dispatch]);

  const dispatchUnsubscribe = useCallback(() => {
    dispatch({
      type: 'Unsubscribe',
      payload: {
        channel,
      },
    });
  }, [channel, dispatch]);

  useEffect(() => {
    dispatchSubscribe();
    if (executeCommandOnSubscribe) {
      executeCommand();
    }

    return () => {
      dispatchUnsubscribe();
    };
  }, [
    dispatchSubscribe,
    dispatchUnsubscribe,
    executeCommand,
    executeCommandOnSubscribe,
  ]);

  return {
    dispatchSubscribe,
    dispatchUnsubscribe,
    executeCommand,
  };
};
