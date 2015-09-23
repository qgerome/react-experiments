'use strict';

import React from 'react';
import DiscussionCard from './DiscussionCard.jsx';

class DiscussionList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const discussions = this.props.discussions;

    return (
      <div>
        <ul className="discussions">
          { discussions.map(discussion =>
              <li onClick={this.selectDiscussion.bind(this, discussion)}><DiscussionCard key={discussion.id} discussion={discussion}/></li>
          )}
        </ul>
    </div>
    );
  }
}

export default DiscussionList;
