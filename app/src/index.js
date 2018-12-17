import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// const color = Math.random() > 0.5 ? 'green' : 'red';

const App = props => {
  return <h2 className="text-center">{props.headerMessage}</h2>;
};

App.propTypes = {
  // headerMessage: React.PropTypes.string.isRequired
  headerMessage: PropTypes.string.isRequired
};

App.defaultProps = {
  headerMessage: 'Hello!!'
};

ReactDOM.render(
  // React.createElement('h2', null, 'Hello React'),

  // <h2 className="text-center">
  //     Centered
  // </h2>,

  // <h2 style={{color}}>
  //     Hello React JSX -- {Math.random()}
  // </h2>,

  <App headerMessage="Hello props!" />,
  document.getElementById('root')
);
