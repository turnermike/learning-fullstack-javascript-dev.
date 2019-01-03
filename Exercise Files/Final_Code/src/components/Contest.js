import React, { Component, PropTypes } from 'react';
import propTypes from 'prop-types';

class Contest extends Component {
  componentDidMount() {
    this.props.fetchNames(this.props.nameIds);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addName(this.refs.newNameInput.value, this.props._id);
    this.refs.newNameInput.value = '';
  };
  render() {
    return (
      <div className="Contest">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Contest Description</h3>
          </div>
          <div className="panel-body">
            <div className="contest-description">
              {this.props.description}
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Proposed Names</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.props.nameIds.map(nameId =>
                <li key={nameId} className="list-group-item">
                  {this.props.lookupName(nameId).name}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Propose a New Name</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input type="text"
                   placeholder="New Name Here..."
                   ref="newNameInput"
                   className="form-control" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-info">
                     Sumbit
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="home-link link"
             onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  _id: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  contestListClick: propTypes.func.isRequired,
  fetchNames: propTypes.func.isRequired,
  nameIds: propTypes.array.isRequired,
  lookupName: propTypes.func.isRequired,
  addName: propTypes.func.isRequired,
};

export default Contest;
