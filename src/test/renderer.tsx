import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { I18nProvider } from '@lingui/react';
import { MemoryRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';
import store from '@/store';

const FullProviders: FC = ({ children }) => (
  <Provider store={store}>
    <I18nProvider language="en" catalogs={{}}>
      <MemoryRouter>{children}</MemoryRouter>
    </I18nProvider>
  </Provider>
);

const renderWithProviders = (
  ui: ReactElement<any>,
  options: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: FullProviders, ...options });

export { renderWithProviders };
