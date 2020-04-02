import React from 'react';
import About from './about/about';
import Skills from './skills/skills';

const Home = () => {
  return (
    <div className={'columns is-multiline is-centered'}>
      <div className={'column center-vertically is-12-mobile is-5'}>
        <About/>
      </div>
      <div className={'column is-12-mobile is-1'}/>
      <div className={'column center-vertically is-12-mobile is-5'}>
        <Skills/>
      </div>
    </div>
  );
};

export default Home;
