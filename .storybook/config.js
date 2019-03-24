import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  // automatically import all story js files that end with *.stories.tsx
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
