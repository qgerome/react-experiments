'use strict';

import React from 'react';
import Reflux from 'reflux';
import DiscussionStore from '../stores/DiscussionStore.jsx';
import DiscussionActions from '../actions/DiscussionActions';

export default React.createClass({
  mixins: [Reflux.connect(DiscussionStore)],
  selectDiscussion: function () {
      DiscussionActions.selectDiscussion(this.props.discussion);
  },
  render: function () {
    const discussion = this.props.discussion;

    return (
        <div className="discussion-card">
          <ul className="recipients" onClick={this.selectDiscussion}>
              {discussion.last_recipients.map(recipient =>
                <li>{recipient.name}</li>
              )}
          </ul>
        </div>
    );
  }
});
