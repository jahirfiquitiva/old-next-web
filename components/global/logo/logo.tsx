import { useEffect, useState } from 'react';
import { Component } from '@components/types';
// @ts-ignore
import LogoSvg from './logo.svg';

const Logo = ({ className }: Component) => {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line max-statements-per-line
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return (<></>);
  return (<LogoSvg className={className}/>);
};

export default Logo;
