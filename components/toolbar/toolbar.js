import { useState } from 'react';
import styles from './toolbar.module.css';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu } from '@mdi/js';

const Toolbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.toolbar}>
        <div className={styles.logo}>
        <span className={styles.item}>
          <a href={'#'}>Jahir Fiquitiva</a>
        </span>
          <button onClick={() => setMenuOpen(!menuOpen)} className={styles.menuToggle}>
            <Icon path={menuOpen ? mdiClose : mdiMenu} size={1} color={'#3867d6'}/>
          </button>
        </div>
        <div className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
        <span className={`${styles.item} ${styles.active}`}>
          <a href={'#'}>Home 🏡</a>
        </span>
          <span className={styles.item}>
          <a href={'#'}>Blog 📝</a>
        </span>
          <span className={styles.item}>
          <a href={'#'}>Uses ⚡️</a>
        </span>
          <span className={styles.item}>
          <a href={'#'}>Donate 💙</a>
        </span>
          <span className={styles.item}>
          <a href={'#'}>Contact 📮</a>
        </span>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
