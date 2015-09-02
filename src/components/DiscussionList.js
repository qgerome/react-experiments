'use strict';

import React from 'react';
import DiscussionItem from './DiscussionItem';

class DiscussionList extends React.Component {
  render() {


    return (<div>
        <ul>
            {this.props.discussions.items.map(function (item, key) {
              return (<DiscussionItem key={key} item={item} />);
            })}
        </ul>
    </div>);
  }
}

DiscussionList.propTypes = {
    discussions: React.PropTypes.object.isRequired
};

export default DiscussionList;
