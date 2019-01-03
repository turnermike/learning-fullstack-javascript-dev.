import React from 'react';
import propTypes from 'prop-types';

const Header = ({ message }) => {
  return (
    <h2 className="Header text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: propTypes.string
};

export default Header;
