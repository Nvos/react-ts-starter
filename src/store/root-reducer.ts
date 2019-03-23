import { connectRouter } from 'connected-react-router';
import history from '../history';

const rootReducer = {
  router: connectRouter(history),
};

export default rootReducer;
