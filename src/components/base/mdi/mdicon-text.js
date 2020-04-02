import React from 'react';
import PropTypes from 'prop-types';
import MDIcon from './mdicon';

const MDIconText = ({
  text, iconName, iconSize, upperCase = false, bold = false, textPosition = 'right', onClick,
}) => {
  const renderText = () => {
    const actualText = upperCase ? (text || '').toUpperCase() : (text || '');
    if (bold) return (<b>{actualText}</b>);
    return actualText;
  };

  if (textPosition === 'left') {
    return (
      <>
        {renderText()}&nbsp;&nbsp;<MDIcon size={iconSize}
                                          iconName={iconName || ''}
                                          onClick={onClick}/>
      </>
    );
  }

  return (
    <>
      {iconName.length > 0 ? <><MDIcon size={iconSize} iconName={iconName || ''}/>&nbsp;&nbsp;</>
        : <></>}{renderText()}
    </>
  );
};

MDIconText.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  upperCase: PropTypes.bool,
  bold: PropTypes.bool,
  textPosition: PropTypes.oneOf(['right', 'left']),
  onClick: PropTypes.func,
};

export default MDIconText;
