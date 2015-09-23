'use strict';

import React from 'react/addons';
import DiscussionStore from '../stores/DiscussionStore.jsx';
import DiscussionList from '../components/DiscussionList.jsx';

import Reflux from 'reflux';

export default React.createClass({
    mixins: [Reflux.connect(DiscussionStore)],
    render() {
      let discussions = this.state.discussions;
      let selected = this.state.selectedDiscussion;
      return (
            <div className="messenger">
                <DiscussionList discussions={discussions} selected={selected}/>
            </div>
        );
    }
});
