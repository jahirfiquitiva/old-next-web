import React from 'react';
import PropTypes from 'prop-types';

const MDIcon = ({
  iconName, size, onClick, className,
}) => (
  <span
    className={`mdi mdi-${size || 0}px mdi-${iconName}${onClick ? ' clickable' : ''}${className
      ? ` ${className}` : ''}`}
    onClick={onClick}/>
);

MDIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default MDIcon;
