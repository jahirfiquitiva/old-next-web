import Link from 'next/link';
import Social from '@components/global/social/social';
import Logo from '@components/global/logo/logo';
import styles from './footer.module.css';
import useTranslation from 'next-translate/useTranslation';
import { CSSProperties } from 'react';

const Footer = () => {
  const { t } = useTranslation('common');

  const buildLinkTitle = (destination: string): string => {
    return t('common:social-link', { site: t(`common:${destination}`) });
  };

  const getLinkStyles = (letter: string): CSSProperties => {
    // @ts-ignore
    return { '--shadow-color': `var(--gradients-${letter})` };
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.container}>
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
          <Social size={0.7}/>
          <p>
            {t('copyright')} © {new Date().getFullYear()}
          </p>
          <p>
            {t('all-rights-reserved')}
          </p>
        </div>
        <div className={`${styles.container} ${styles.second}`}>
          <Link href={'/blog'}>
            <a title={buildLinkTitle('blog')}
               aria-label={buildLinkTitle('blog')}
               style={getLinkStyles('b')}>
              <span className={styles.emoji}>
                📝
              </span>
              &nbsp;&nbsp;
              <span className={'text-gradient grad-b forced'}>
                {t('common:blog')}
              </span>
            </a>
          </Link>

          <Link href={'/blog/uses'}>
            <a title={buildLinkTitle('uses')}
               aria-label={buildLinkTitle('uses')}
               style={getLinkStyles('d')}>
              <span className={styles.emoji}>
                ⚡️
              </span>
              &nbsp;&nbsp;
              <span className={'text-gradient grad-d forced'}>
                {t('common:uses')}
              </span>
            </a>
          </Link>

          <Link href={'/donate'}>
            <a title={buildLinkTitle('donate')}
               aria-label={buildLinkTitle('donate')}
               style={getLinkStyles('f')}>
              <span className={styles.emoji}>
                ❤️
              </span>
              &nbsp;&nbsp;
              <span className={'text-gradient grad-f forced'}>
                {t('common:donate')}
              </span>
            </a>
          </Link>

          <Link href={'/contact'}>
            <a title={buildLinkTitle('contact')}
               aria-label={buildLinkTitle('contact')}
               style={getLinkStyles('a')}>
              <span className={styles.emoji}>
                📬
              </span>
              &nbsp;&nbsp;
              <span className={'text-gradient grad-a forced'}>
                {t('common:contact')}
              </span>
            </a>
          </Link>
        </div>
        <div className={`${styles.container} ${styles.third}`}>
          <Link href={'/music'}>
            <a title={buildLinkTitle('music')}
               aria-label={buildLinkTitle('music')}
               style={getLinkStyles('b')}>
              <span className={styles.emoji}>
                🎧
              </span>
              &nbsp;&nbsp;
              <span className={'text-gradient grad-b forced'}>
                {t('common:music')}
              </span>
            </a>
          </Link>

          <Link href={'/inspiration'}>
            <a title={buildLinkTitle('inspiration')}
               aria-label={buildLinkTitle('inspiration')}
               style={getLinkStyles('c')}>
              <span className={styles.emoji}>
                🍀
              </span>
              &nbsp;&nbsp;
              <span className={'text-gradient grad-c forced'}>
                {t('common:inspiration')}
              </span>
            </a>
          </Link>
        </div>
        <div className={`${styles.container} ${styles.fourth}`}>
          <Link href={'/changes'}>
            <a title={buildLinkTitle('changes')}
               aria-label={buildLinkTitle('changes')}
               style={getLinkStyles('d')}>
              <span className={styles.emoji}>
                ✨
              </span>
              &nbsp;&nbsp;
              <span className={'text-gradient grad-d forced'}>
                {t('common:changes')}
              </span>
            </a>
          </Link>

          <Link href={'/thanks'}>
            <a title={buildLinkTitle('thanks')}
               aria-label={buildLinkTitle('thanks')}
               style={getLinkStyles('e')}>
              <span className={styles.emoji}>
                ❤️
              </span>
              &nbsp;&nbsp;
              <span className={'text-gradient grad-e forced'}>
                {t('common:supporters')}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
