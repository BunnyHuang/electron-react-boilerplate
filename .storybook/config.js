import { configure, setAddon, addDecorator } from '@storybook/react';
import React from 'react';

//set global layout
const globalWrapDecorator = sotryFn => {
  return <div style={{ padding: 10 }}>{sotryFn()}</div>;
};
addDecorator(globalWrapDecorator);

// automatically import all files ending in *.stories.js
const req = require.context('../app', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
