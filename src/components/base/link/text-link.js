import React from 'react';
import PropTypes from 'prop-types';
import MyLink from './my-link';

const TextLink = ({ text, url, openInNewTab = true }) => (
  <MyLink url={url} openInNewTab={openInNewTab}>{text}</MyLink>);

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
};

export default TextLink;
