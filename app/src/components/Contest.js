import React, { Component } from 'react';
import propTypes from 'prop-types';

class Contest extends Component {
  render() {
    return (
      <div className="Contest">
        {this.props.id}
      </div>
    );
  }
}

Contest.propTypes = {
  id: propTypes.number.isRequired
};

export default Contest;