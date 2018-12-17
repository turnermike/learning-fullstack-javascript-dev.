import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// const color = Math.random() > 0.5 ? 'green' : 'red';

const Header = ({ message }) => {
  return (
    <h2 className="text-color">
      {message}
    </h2>
  );
};

Header.propTypes = {
  // headerMessage: React.PropTypes.string.isRequired
  message: PropTypes.string.isRequired
};


const App = () => {
  return (
    <div className="App">
      <Header message="Naming Contests" />
      <div>
      ...
      </div>
    </div>
  );
};

// render method
ReactDOM.render(
  // React.createElement('h2', null, 'Hello React'),

  // <h2 className="text-center">
  //     Centered
  // </h2>,

  // <h2 style={{color}}>
  //     Hello React JSX -- {Math.random()}
  // </h2>,

  <App />,
  document.getElementById('root')
);