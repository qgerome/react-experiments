'use strict';

import React from 'react/addons';
import DiscussionStore from '../stores/DiscussionStore.jsx';
import DiscussionList from '../components/DiscussionList.jsx';
import DiscussionMessages from '../components/DiscussionMessages.jsx';
import Reflux from 'reflux';

export default React.createClass({
    mixins: [Reflux.connect(DiscussionStore)],
    render() {
      var discussions = this.state.discussions;
      const selected = this.state.selectedDiscussion;
      return (
            <div className="app container row">
              <div className="col-md-4">
                <DiscussionList discussions={discussions}/>
              </div>
              {(() => {
                  if (selected) {
                    return (<div className="col-md-8">
                      <DiscussionMessages discussion={selected}/>
                    </div>);
                  }
                })()}
            </div>
        );
    }
});
