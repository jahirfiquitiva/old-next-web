import React from 'react';
import PropTypes from 'prop-types';

const MyLink = ({ children, url, className, openInNewTab = true }) => {
  if (openInNewTab) {
    return (
      <a href={url}
         target={'_blank'}
         rel={'noopener noreferrer'}
         className={className}>
        {children}
      </a>
    );
  }

  return (<a href={url}>{children}</a>);
};

MyLink.propTypes = {
  children: PropTypes.element.isRequired,
  url: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
  className: PropTypes.string,
};

export default MyLink;
