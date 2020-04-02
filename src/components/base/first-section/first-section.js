import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../toolbar/toolbar';
import HeroBody from '../hero/hero-body';
import DownIndicator from '../../home/down-indicator/down-indicator';

const FirstSection = ({ children, colored = false, activeSection = -1 }) => {
  const renderSectionFooter = () => {
    if (activeSection !== 0) return (<></>);
    return (
      <div className={'hero-foot'}>
        <DownIndicator/>
      </div>
    );
  };

  return (
    <>
      <section className={`hero is-fullheight-with-navbar${colored ? ' is-colored' : ''}`}>
        <div className={'hero-head'}>
          <Toolbar activeItemIndex={activeSection}/>
        </div>
        <HeroBody>{children}</HeroBody>
        {renderSectionFooter()}
      </section>
    </>
  );
};

FirstSection.propTypes = {
  children: PropTypes.any.isRequired,
  colored: PropTypes.bool,
  activeSection: PropTypes.number,
};

export default FirstSection;
