import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
  return (
    <h2 className="text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  // headerMessage: React.PropTypes.string.isRequired
  message: PropTypes.string.isRequired
};

export default Header;