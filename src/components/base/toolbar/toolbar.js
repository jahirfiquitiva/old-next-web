import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import MDIconText from '../mdi/mdicon-text';

const toolbarLinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Projects',
    link: '/#projects',
  },
  {
    title: 'Donate',
    link: '/donate',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'Uses',
    link: '/uses',
  },
];

const Toolbar = ({ activeItemIndex = -1 }) => {
  const switchTheme = () => {
    console.log('TODO Switch theme');
  };

  return (
    <>
      {/*<BulmaBody/>*/}
      <div className={'hero-head'}>
        <nav className={'navbar is-fixed-top has-shadow'}>
          <div className={'container'}>
            <div className={'navbar-brand has-text-weight-semibold'}>
              <a className={'navbar-item has-text-primary is-manrope'} href={'/'}>
                <img src={'/images/brand/logo-def.svg'}
                     alt={'JF'}
                     height={'48'}
                     width={'48'}/>
                Jahir Fiquitiva
              </a>
              <span className={'navbar-burger burger'} data-target={'nav-menu'}>
            <span/>
            <span/>
            <span/>
          </span>
            </div>
            <div className={'navbar-menu'} id={'nav-menu'}>
              <div className={'navbar-end'}>
                {toolbarLinks.map((it, i) => (
                  <Link key={i} href={it.link}>
                    <a className={`navbar-item ${i === activeItemIndex ? 'is-active' : ''}`}>
                      {it.title}
                    </a>
                  </Link>))}
                <div className={'navbar-item'} id={'theme-switch'}>
                  <button className={'button is-small navbar-button'}>
                    <MDIconText text={'Dark Theme'} iconName={'weather-night'}/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

Toolbar.propTypes = {
  activeItemIndex: PropTypes.number,
};

export default Toolbar;
