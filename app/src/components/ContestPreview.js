import React, { Component } from 'react';
import propTypes from 'prop-types';

class ContestPreview extends Component {

  handleClick = () => {
    console.log(this.props.contestName);
  };

  render() {
    return (
      <div className="ContestPreview" onClick={this.handleClick}>
        <div className="category-name">
          {this.props.categoryName}
        </div>
        <div className="link contest-name ">
          {this.props.contestName}
        </div>
      </div>
    );
  }

}

ContestPreview.propTypes = {
  categoryName: propTypes.string.isRequired,
  contestName: propTypes.string.isRequired
};

export default ContestPreview;