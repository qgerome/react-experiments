'use strict';

import Reflux from 'reflux';
import $ from 'jquery';
import DiscussionActions from '../actions/DiscussionActions';
import Config from '../config';

let storeState = {
  messages: []
};

export default Reflux.createStore({
    listenables: [DiscussionActions],
    getInitialState() {
      return storeState;
    },
    getMessages(discussionId) {
      $.ajax(`http://localhost:9000/api/discussions/${discussionId}/messages`, {
          data: {
              'auth_token': Config.authToken
          }
      }).done(function (response) {
        storeState.messages = response.messages;
        this.trigger(storeState);
      }.bind(this));
    }
});
