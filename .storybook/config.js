import { configure } from '@storybook/react';

// function loadStories() {
//   require('../src/stories');
// }

function loadStories() {  
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
