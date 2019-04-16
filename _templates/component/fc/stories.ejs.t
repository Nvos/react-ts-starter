---
to: "<%= h.isSet(configuration, 'stories') ? h.joinPath(location, name, name + '.stories.tsx') : null %>"
---
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import <%=name%> from './<%=name%>';

storiesOf('<%=name%>', module).add(
  '<%=name%> standard',
  () => (
    <<%=name%> />
  ),
  {
    info: { inline: true },
  },
);