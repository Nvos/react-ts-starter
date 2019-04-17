import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Button from './Button';

storiesOf('Styled system|Components/Button', module)
  .addDecorator(jsxDecorator)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with text 1', () => <Button loading>Hello Button</Button>);
