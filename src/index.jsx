'use strict';

import React from 'react';
import Messenger from './app/Messenger.jsx';

const mountNode = document.getElementById('root');

React.render(
  <Messenger/>,
  mountNode
);
