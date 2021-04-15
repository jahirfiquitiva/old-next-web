import { CSSProperties, useContext, useState } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu } from '@mdi/js';
import ThemeContext from '@components/theme/ThemeContext';
import Logo from '@components/global/logo/logo';
import styles from './toolbar.module.css';

interface ToolbarProps {
  selected?: number
}

const Toolbar = ({ selected }: ToolbarProps) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const renderThemeToggle = (mobile: boolean = true) => {
    return (<span
      title={t('common:toggle-theme')}
      aria-label={t('common:toggle-theme')}
      className={`${styles.item} ${styles.themer} ${mobile
                                                    ? styles.mobile
                                                    : styles.desktop}`}
      onClick={() => toggleTheme()}>
      <span className={styles.emoji}>{isDark ? '🌞' : '🌚'}</span>
    </span>);
  };

  const buildLinkTitle = (destination: string): string => {
    return t('common:social-link', { site: t(`common:${destination}`) });
  };

  const getLinkStyles = (item: number): CSSProperties => {
    let letter = 'b';
    switch (item) {
      case 2:
        letter = 'd';
        break;
      case 3:
        letter = 'f';
        break;
      case 4:
        letter = 'a';
        break;
      default:
        break;
    }
    // @ts-ignore
    return { '--shadow-color': `var(--gradients-${letter})` };
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.toolbar}>
        <div className={styles.logo}>
          <span className={styles.item}>
            <Link href={'/'}>
              <a title={buildLinkTitle('home')}
                 aria-label={buildLinkTitle('home')}
                 className={styles.logito}>
                {/*
                <img
                  src={`/assets/images/brand/logo-def${isDark ? '-dark' : ''}.svg`}
                  alt={'JF'} height={24} width={24} loading={'lazy'}/>
                */}
                {/* @ts-ignore */}
                <Logo className={styles.logosvg}/>
                <span className={'text-gradient grad-a forced'}>
                  Jahir Fiquitiva
                </span>
              </a>
            </Link>
          </span>
          <div>
            {renderThemeToggle()}
            <button
              name={t('common:toggle-menu')}
              aria-label={t('common:toggle-menu')}
              onClick={() => setMenuOpen(!menuOpen)}
              className={styles.menuToggle}>
              <Icon path={menuOpen ? mdiClose : mdiMenu} size={1}/>
            </button>
          </div>
        </div>
        <div className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
          <span
            className={[styles.item, selected === 1 ? styles.active : ''].join(
              ' ')}>
            <Link href={'/blog'}>
              <a title={buildLinkTitle('blog')}
                 aria-label={buildLinkTitle('blog')}>
                <span className={styles.emoji} style={getLinkStyles(1)}>
                  📝
                </span>
                <span className={'text-gradient grad-b forced'}>
                  {t('common:blog')}
                </span>
              </a>
            </Link>
          </span>
          <span
            className={[styles.item, selected === 2 ? styles.active : ''].join(
              ' ')}>
            <Link href={'/blog/uses'}>
              <a title={buildLinkTitle('uses')}
                 aria-label={buildLinkTitle('uses')}>
                <span className={styles.emoji} style={getLinkStyles(2)}>
                  ⚡️
                </span>
                <span className={'text-gradient grad-d forced'}>
                  {t('common:uses')}
                </span>
              </a>
            </Link>
          </span>
          <span
            className={[styles.item, selected === 3 ? styles.active : ''].join(
              ' ')}>
            <Link href={'/donate'}>
              <a title={buildLinkTitle('donate')}
                 aria-label={buildLinkTitle('donate')}>
                <span className={styles.emoji} style={getLinkStyles(3)}>
                  🧡
                </span>
                <span className={'text-gradient grad-f forced'}>
                  {t('common:donate')}
                </span>
              </a>
            </Link>
          </span>
          <span
            className={[styles.item, selected === 4 ? styles.active : ''].join(
              ' ')}>
            <Link href={'/contact'}>
              <a title={buildLinkTitle('contact')}
                 aria-label={buildLinkTitle('contact')}>
                <span className={styles.emoji} style={getLinkStyles(4)}>
                  📬
                </span>
                <span className={'text-gradient grad-a forced'}>
                  {t('common:contact')}
                </span>
              </a>
            </Link>
          </span>
          {renderThemeToggle(false)}
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
