import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
import Social from '@components/global/social/social';
import Logo from '@components/global/logo/logo';
import styles from './footer.module.css';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Social centered/>
        <p>
          {/* eslint-disable-next-line */}
          {t('made-with')}{' '}
          <Icon path={mdiHeart} size={0.6}/>
          {' '}{t('by')}{' '}
          <Link href={'/'}><a>{t('yours-truly')}</a></Link>
        </p>
        <p>
          {t('copyright')} © {new Date().getFullYear()}{' '}|
          {' '}{t('all-rights-reserved')}
        </p>
        <Link href={'/'}>
          <a
            title={'home link'} aria-label={'home link'}
            className={styles.logito}>
            {/*
            <img src={`/assets/images/brand/logo-def${isDark ? '-dark' : ''}.svg`}
                 alt={'JF'} height={24} width={24} loading={'lazy'}/>
            */}
            {/* @ts-ignore */}
            <Logo className={styles.logosvg}/>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
