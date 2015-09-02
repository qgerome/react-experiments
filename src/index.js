'use strict';

import React from 'react';
import DiscussionList from './components/DiscussionList';

const mountNode = document.getElementById('root');

var discussions = {
  items: [
    'lalala',
    'lollolol'
  ]
};

React.render(
  <DiscussionList discussions={discussions}/>,
  mountNode
);
