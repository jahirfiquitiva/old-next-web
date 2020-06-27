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
          <a href={'/'}>Jahir Fiquitiva</a>
        </span>
          <button onClick={() => setMenuOpen(!menuOpen)} className={styles.menuToggle}>
            <Icon path={menuOpen ? mdiClose : mdiMenu} size={1} color={'#3867d6'}/>
          </button>
        </div>
        <div className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
        <span className={`${styles.item} ${selected === 0 ? styles.active : ''}`}>
          <a href={'/'}>🏡 &nbsp;&nbsp;Home</a>
        </span>
          <span className={`${styles.item} ${selected === 1 ? styles.active : ''}`}>
          <a href={'/blog'}>📝 &nbsp;&nbsp;Blog</a>
        </span>
          <span className={`${styles.item} ${selected === 2 ? styles.active : ''}`}>
          <a href={'/uses'}>⚡️ &nbsp;&nbsp;Uses</a>
        </span>
          <span className={`${styles.item} ${selected === 3 ? styles.active : ''}`}>
          <a href={'/donate'}>💙 &nbsp;&nbsp;Donate</a>
        </span>
          <span className={`${styles.item} ${selected === 4 ? styles.active : ''}`}>
          <a href={'/contact'}>📮 &nbsp;&nbsp;Contact</a>
        </span>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
