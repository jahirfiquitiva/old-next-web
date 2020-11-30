import Link from 'next/link';
import { useContext, useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu } from '@mdi/js';
import ThemeContext from '@components/theme/ThemeContext';
import Logo from '@components/global/logo/logo';
import styles from './toolbar.module.css';

const Toolbar = ({ selected }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={styles.nav}
      style={{
        WebkitBackdropFilter: 'saturate(150%) blur(8px)',
      }}>
      <div className={styles.toolbar}>
        <div className={styles.logo}>
          <span className={styles.item}>
            <Link href={'/'}>
              <a
                title={'home link'} aria-label={'home link'}
                className={styles.logito}>
                {/*
                <img
                  src={`/assets/images/brand/logo-def${isDark ? '-dark' : ''}.svg`}
                  alt={'JF'} height={24} width={24} loading={'lazy'}/>
                */}
                <Logo className={styles.logosvg}/>
                Jahir Fiquitiva
              </a>
            </Link>
          </span>
          <div>
            <span className={`${styles.item} ${styles.themer} ${styles.mobile}`}
                  onClick={() => toggleTheme()}>
              <span className={styles.emoji}>{isDark ? '🌞' : '🌚'}</span>
            </span>
            <button
              name={'Toggle Toolbar Menu'} aria-label={'Toggle Toolbar Menu'}
              onClick={() => setMenuOpen(!menuOpen)} className={styles.menuToggle}>
              <Icon path={menuOpen ? mdiClose : mdiMenu} size={1}/>
            </button>
          </div>
        </div>
        <div className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
          <span className={`${styles.item} ${selected === 0 ? styles.active : ''}`}>
            <Link href={'/'}>
              <a title={'home link'} aria-label={'home link'}>
                <span className={styles.emoji}>🏡</span><span>Home</span>
              </a>
            </Link>
          </span>
          <span className={`${styles.item} ${selected === 1 ? styles.active : ''}`}>
            <Link href={'/blog'}>
              <a><span className={styles.emoji}>📝</span><span>Blog</span></a>
            </Link>
          </span>
          <span className={`${styles.item} ${selected === 2 ? styles.active : ''}`}>
            <Link href={'/blog/uses'}>
              <a><span className={styles.emoji}>⚡️</span><span>Uses</span></a>
            </Link>
          </span>
          <span className={`${styles.item} ${selected === 3 ? styles.active : ''}`}>
            <Link href={'/donate'}>
              <a><span className={styles.emoji}>💙</span><span>Donate</span></a>
            </Link>
          </span>
          <span className={`${styles.item} ${selected === 4 ? styles.active : ''}`}>
            <Link href={'/contact'}>
              <a><span className={styles.emoji}>📮</span><span>Contact</span></a>
            </Link>
          </span>
          <span className={`${styles.item} ${styles.themer} ${styles.desktop}`}
                onClick={() => toggleTheme()}>
            <span className={styles.emoji}>{isDark ? '🌞' : '🌚'}</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
