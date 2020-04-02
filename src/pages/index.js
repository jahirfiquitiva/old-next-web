import React from 'react';
import Home from '../components/home/home';
import FirstSection from '../components/base/first-section/first-section';
import Button from '../components/home/button/button';

const Index = () => (
  <>
    <FirstSection colored={true} activeSection={0}>
      <Home/>
      <Button/>
    </FirstSection>
  </>
);

export default Index;
