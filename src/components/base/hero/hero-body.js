import React from 'react';
import PropTypes from 'prop-types';

const HeroBody = ({ children, className }) => (
  <div className={`hero-body ${className || ''}`}>
    <div className={'container'}>
      {children}
    </div>
  </div>
);

HeroBody.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default HeroBody;
