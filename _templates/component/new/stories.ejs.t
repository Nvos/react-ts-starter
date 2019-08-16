---
to: "<%= h.isSet(configuration, 'stories') ? h.joinPath(location, name, name + '.stories.tsx') : null %>"
---
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import <%=name%> from './<%=name%>';
import Notes from './<%=name%>.note.md';

storiesOf('<%=name%>', module)
.addDecorator(centered)
.add(
  '<%=name%> standard',
  () => (
    <<%=name%> />
  ),
  {
    notes: { markdown: Notes },
  },
);
