import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '.';

storiesOf('Text', module).add('Standard text variants', () => (
  <div>
    <Typography.span>Span text</Typography.span>
    <Typography.p>Span text</Typography.p>
    <Typography.s>Span text</Typography.s>
  </div>
));
