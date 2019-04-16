---
to: "<%= h.isSet(configuration, 'test') ? h.joinPath(location, name, name + '.test.tsx') : null %>"
---
import * as React from 'react';
import { render } from 'react-testing-library';
import <%=name%> from './<%=name%>';

describe('<%=name%> tests', () => {
  test('Will render', () => {
    <% if (h.isSet(configuration, 'connected')) { -%>
    // Component is connected it is necessary to provide correct redux context
    // Take look at Redux state and action in https://react-testing-examples.com/ 
    <% } -%>

    const { container } = render(
      <<%=name%> />
    );
  });
});