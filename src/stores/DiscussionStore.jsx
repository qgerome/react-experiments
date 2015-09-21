'use strict';

import Reflux from 'reflux';
import $ from 'jquery';
import DiscussionActions from '../actions/DiscussionActions';
import Config from '../config';

let storeState = {
  discussions: [],
  selectedDiscussion: null
};

export default Reflux.createStore({
    listenables: [DiscussionActions],
    getInitialState() {
      return storeState;
    },
    init() {
      this.fetchAll();
    },
    fetchAll() {
      $.ajax(`${Config.apiHost}/api/discussions`, {
          data: {
              'auth_token': Config.authToken
          }
      }).done(function (response) {
        storeState.discussions = response.discussions;
        this.trigger(storeState);
      }.bind(this));
    },
    selectDiscussion(discussion) {
      storeState.selectedDiscussion = discussion;
      DiscussionActions.getMessages(discussion.id);
      this.trigger(storeState);
    }
});
