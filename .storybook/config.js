import { configure } from '@storybook/react';

import { setStubbingMode } from 'react-komposer';

setStubbingMode(true)

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
