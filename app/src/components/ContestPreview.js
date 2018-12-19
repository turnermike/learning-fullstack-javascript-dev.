import React, { Component } from 'react';
import propTypes from 'prop-types';

class ContestPreview extends Component {

  handleClick = () => {
    console.log(this.props.contestName);
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <div className="link ContestPreview" onClick={this.handleClick}>
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
  id: propTypes.number.isRequired,
  categoryName: propTypes.string.isRequired,
  contestName: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};

export default ContestPreview;