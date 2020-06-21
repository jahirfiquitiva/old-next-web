import { useState } from 'react';
import styles from './toolbar.module.css';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu } from '@mdi/js';

const Toolbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.toolbar}>
      <ul className={styles.menu}>
        <li className={styles.logo}><a href={'#'}>Invisible App</a></li>
        <li className={`${styles.item} ${menuOpen ? styles.active : ''}`}>
          <a href={'#'}>Home 🏡</a>
        </li>
        <li className={`${styles.item} ${menuOpen ? styles.active : ''}`}>
          <a href={'#'}>Projects 👨‍💻</a>
        </li>
        <li className={`${styles.item} ${menuOpen ? styles.active : ''}`}>
          <a href={'#'}>Donate 💙</a>
        </li>
        <li className={`${styles.item} ${menuOpen ? styles.active : ''}`}>
          <a href={'#'}>Uses ⚡️</a>
        </li>
        <li className={`${styles.item} ${menuOpen ? styles.active : ''}`}>
          <a href={'#'}>Contact 📮</a>
        </li>
        <li className={`${styles.item} ${menuOpen ? styles.active : ''}`}>
          <a href={'#'}>Blog 📝</a>
        </li>
        <li className={`${styles.toggle}`}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Icon path={menuOpen ? mdiClose : mdiMenu}
                  size={1} color={'red'}/>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Toolbar;
