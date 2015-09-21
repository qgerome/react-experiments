'use strict';

import React from 'react';
import Config from '../config';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const href = `${Config.apiHost}/api/tile/thumbnail/${this.props.expert.profile_id}?tclass=people&fallback=false`;
    return (
      <img src={href}></img>
    );
  }
}

ProfilePicture.propTypes = {
  expert: React.PropTypes.object.isRequired
};


export default ProfilePicture;
