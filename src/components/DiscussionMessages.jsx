'use strict';

import React from 'react';
import MessagesStore from '../stores/MessagesStore.jsx';
import DiscussionActions from '../actions/DiscussionActions';
import Message from './Message.jsx';

export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    MessagesStore.listen(this.onStateChange.bind(this));
    DiscussionActions.getMessages(this.props.discussion.id);
  }
  onStateChange(state) {
    this.setState(state);
  }
  render() {
    let messages = this.state.messages;
    if (messages) {
      return (
        <div className="messages">
          <h5>Messages</h5>
          <ul>
          { messages.map(message => {
            return <li><Message key={message.id} message={message}></Message></li>;
          })}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="messages">
          <span>No messages</span>
        </div>
      );
    }

  }
}
