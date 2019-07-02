import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Typography from './Typography';

storiesOf('Text', module).add('Standard text variants', () => (
  <>
    <Typography.span>Span text</Typography.span>
    <Typography.p>Span text</Typography.p>
    <Typography.s>Span text</Typography.s>
  </>
));
