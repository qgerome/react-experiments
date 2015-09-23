'use strict';

import React from 'react';
import DiscussionActions from '../actions/DiscussionActions';
import ProfilePicture from './ProfilePicture.jsx';

export default class DiscussionCard extends React.Component {
  constructor(props) {
    super(props);
    this.selectDiscussion = this.selectDiscussion.bind(this);
  }

  selectDiscussion() {
      DiscussionActions.selectDiscussion(this.props.discussion);
  }

  render() {
    const discussion = this.props.discussion;
    return (
        <div ref="card" className="discussion-card">
          <ProfilePicture className="profile-picture" expert={discussion.last_message.expert} />
        </div>
    );
  }
}
