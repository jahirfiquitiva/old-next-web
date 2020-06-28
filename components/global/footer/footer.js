import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
import Social from '@components/global/social/social';
import ExtLink from '@components/global/ext-link/ext-link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Social centered/>
        <p>Made with <Icon path={mdiHeart} size={.6}/> by <ExtLink to={'/'} label={'yours truly'}
                                                                   newTab={false}/></p>
        <p>Copyright © {new Date().getFullYear()} | All Rights Reserved</p>
        <a href={'/'} className={styles.logito}>
          <img src={'/static/images/brand/logo-def.svg'} alt={'JF'} height={24} width={24}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
