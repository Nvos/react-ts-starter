import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  showPanel: true,
  panelPosition: 'bottom',
});

function loadStories() {
  // automatically import all story js files that end with *.stories.tsx
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
