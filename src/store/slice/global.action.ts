import { createStandardAction } from 'typesafe-actions';

export const resetAll = createStandardAction('[Global] Reset all')<undefined>();
export const socketConnect = createStandardAction('[Socket] Connect')<
  undefined
>();
export const socketDisconnect = createStandardAction('[Socket] Disconnect')<
  undefined
>();
export const socketMessage = createStandardAction('[Socket] Message')<
  undefined
>();
export const socketReconnected = createStandardAction('[Socket] Reconnected')<
  undefined
>();
export const socketConnectionDropped = createStandardAction(
  '[Socket] Connection dropped',
)<undefined>();
export const socketEmit = createStandardAction('[Socket] Emit')<any>();
