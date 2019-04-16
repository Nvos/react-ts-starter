import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ConnectedRouter } from 'connected-react-router';
import { Router } from 'react-router-dom';

import history from './history';
import { RootRouter } from '@/routes';

const App: React.FC = () => (
  <Provider store={store}>
    {/* Fix strange bug with no Router context for link when using only ConnectedRouter */}
    <Router history={history}>
      <ConnectedRouter history={history}>
        <RootRouter />
      </ConnectedRouter>
    </Router>
  </Provider>
);

export default App;
