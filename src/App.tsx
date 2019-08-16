import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import history from './history';
import { RootRouter } from '@/routes';
import store from './store';
import { theme } from './theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <RootRouter />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default hot(App);
