import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { I18nProvider } from '@lingui/react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import history from './history';
import { RootRouter } from '@/routes';
import store from './store';
import { theme } from './theme';

const loadCatalog = async (language: string) => {
  const catalog: Promise<{}> = await import(
    /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
    `./locales/${language}/messages.js`
  );
  return catalog;
};

const App: React.FC = () => {
  const [language] = useState('en');
  const [catalogs, setCatalog] = useState({});

  useEffect(() => {
    loadCatalog(language)
      .then(result => {
        setCatalog(catalogs => ({ ...catalogs, [language]: result }));
      })
      .catch(err => {
        if (err) {
          console.log(`Failed to load translations for ${language}`);
        }
      });
  }, [language]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <I18nProvider language={language} catalogs={catalogs}>
          <Router history={history}>
            <RootRouter />
          </Router>
        </I18nProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default hot(App);
