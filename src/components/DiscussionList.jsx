'use strict';

import React from 'react';
import DiscussionCard from './DiscussionCard.jsx';

class DiscussionList extends React.Component {
  render() {
    const discussions = this.props.discussions;
    return (
      <ul>
        { discussions.map(discussion =>
            <li><DiscussionCard discussion={discussion}/></li>
        )}
      </ul>
    );
  }
}

export default DiscussionList;
