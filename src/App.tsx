import { Component as MyComponent } from '@/components';
import { View } from '@/routes';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import store from './store';
import { ConnectedRouter } from 'connected-react-router';
import { Router } from 'react-router-dom';

import history from './history';
import RootRouter from './routes/RootRouter';

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        {/* TODO: Fix strange bug with no Router context for link when using only ConnectedRouter */}
        <Router history={history}>
          <ConnectedRouter history={history}>
            <RootRouter />
          </ConnectedRouter>
        </Router>
      </Provider>
    );
  }
}

export default App;
