import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu } from '@mdi/js';
import styles from './toolbar.module.css';

const Toolbar = ({ selected }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.toolbar}>
        <div className={styles.logo}>
        <span className={styles.item}>
          <a href={'/'} className={styles.logito}>
            <img src={'/static/images/brand/logo-def.svg'} alt={'JF'} height={24} width={24}/>Jahir Fiquitiva
          </a>
        </span>
          <button onClick={() => setMenuOpen(!menuOpen)} className={styles.menuToggle}>
            <Icon path={menuOpen ? mdiClose : mdiMenu} size={1} color={'#3867d6'}/>
          </button>
        </div>
        <div className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
        <span className={`${styles.item} ${selected === 0 ? styles.active : ''}`}>
          <a href={'/'}><span className={styles.emoji}>🏡</span><span>Home</span></a>
        </span>
        <span className={`${styles.item} ${selected === 1 ? styles.active : ''}`}>
          <a href={'/blog'}><span className={styles.emoji}>📝</span><span>Blog</span></a>
        </span>
        <span className={`${styles.item} ${selected === 2 ? styles.active : ''}`}>
          <a href={'/uses'}><span className={styles.emoji}>⚡️</span><span>Uses</span></a>
        </span>
        <span className={`${styles.item} ${selected === 3 ? styles.active : ''}`}>
          <a href={'/donate'}><span className={styles.emoji}>💙</span><span>Donate</span></a>
        </span>
        <span className={`${styles.item} ${selected === 4 ? styles.active : ''}`}>
          <a href={'/contact'}><span className={styles.emoji}>📮</span><span>Contact</span></a>
        </span>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
