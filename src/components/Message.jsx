'use strict';

import React from 'react';
import ProfilePicture from './ProfilePicture.jsx';

export default class Message extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const message = this.props.message;
      return (
        <div className="message">
          <ProfilePicture expert={message.expert} />
          <div className="body" dangerouslySetInnerHTML={{__html: message.html}}></div>
          <div className="metadata">
            <div><span className="author">{message.expert.name}</span>&nbsp;<span className="time">{moment(message.posted).fromNow()}</span></div>
          </div>
        </div>
      );
    }
}
