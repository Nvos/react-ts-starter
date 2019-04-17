import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

function loadStories() {
  // automatically import all story js files that end with *.stories.tsx
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
