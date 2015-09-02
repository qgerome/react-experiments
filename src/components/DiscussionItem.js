'use strict';

import React from 'react';

class DiscussionItem extends React.Component {
  render() {
    return (<li>{this.props.item} - {this.props.key}</li>);
  }
}

export default DiscussionItem;
