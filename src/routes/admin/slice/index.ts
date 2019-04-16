import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

const adminSlice = combineReducers({
  user: userReducer,
});

export { adminSlice };
