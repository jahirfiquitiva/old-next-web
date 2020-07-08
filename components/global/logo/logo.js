import { useEffect, useState } from 'react';
import LogoSvg from './logo.svg';

const Logo = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line max-statements-per-line
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return (<></>);
  return (<LogoSvg className={className}/>);
};

export default Logo;
