import { combineReducers } from 'redux';
import { default as userReducer } from './user/user.reducer';
import { injectReducer } from '@/store';

const adminSlice = combineReducers({
  user: userReducer,
});

export { adminSlice };
