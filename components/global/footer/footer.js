import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
import Social from '@components/global/social/social';
import Logo from '@components/global/logo/logo';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <Social centered/>
      <p>
        Made with <Icon path={mdiHeart} size={0.6}/> by <Link href={'/'}><a>yours truly</a></Link>
      </p>
      <p>Copyright © {new Date().getFullYear()} | All Rights Reserved</p>
      <Link href={'/'}>
        <a
          title={'home link'} aria-label={'home link'}
          className={styles.logito}>
          {/*
            <img src={`/assets/images/brand/logo-def${isDark ? '-dark' : ''}.svg`}
                 alt={'JF'} height={24} width={24}/>
            */}
          <Logo className={styles.logosvg}/>
        </a>
      </Link>
    </div>
  </footer>
);

export default Footer;
