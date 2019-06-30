import * as React from 'react';
import { storiesOf } from '@storybook/react';
import NotFound from './NotFound';

storiesOf('NotFound', module).add('NotFound standard', () => <NotFound />, {
  info: { inline: true },
});
