import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExtLink from '@components/global/ext-link/ext-link';
import Social from '@components/global/social/social';
import SkillSet from '@components/root/skillset/skillset';
import styles from './about.module.css';
import useTranslation from 'next-translate/useTranslation';

const hellos = [
  'Hello, world',
  'Hola, mundo',
  'Ciao, mondo',
  'Hallo, Welt',
  'Salut, monde',
  'Olá, mundo',
];

const About = () => {
  const { t } = useTranslation();
  const [hello, setHello] = useState(0);

  useEffect(() => {
    const changeHello = setInterval(() => {
      setHello((helloo) => (helloo >= hellos.length - 1 ? 0 : helloo + 1));
    }, 2500);
    return () => clearInterval(changeHello);
  }, []);

  return (
    <>
      <div className={styles.about}>
        <div className={styles.info}>
          <h3 className={styles.hello}>
            <span className={'wave'}>👋</span>
            &nbsp;&nbsp;{hellos[hello]}!
          </h3>
          <h3 className={styles.name}>{t('home:i-am')}</h3>
          <br />
          <p>
            {t('home:description')}{' '}
            <ExtLink
              to={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
              label={'Colombia 🇨🇴'}
            />
          </p>
        </div>
        <div className={styles.photocontainer}>
          <Image
            loading={'lazy'}
            src={'/assets/images/me/me.jpg'}
            alt={'Jahir\'s Photo'}
            className={styles.photo}
            height={168}
            width={168}
          />
        </div>
      </div>
      <div className={styles.details}>
        <p>
          {t('home:details.fifth.a')}{' '}
          <ExtLink
            to={'https://mattersupply.co/'}
            label={'Matter Supply Co.'}
            newTab
          />
        </p>
        <p>
          {t('home:details.first.a')}{' '}
          <ExtLink
            to={'#projects'}
            label={t('home:details.first.b')}
            newTab={false}
          />{' '}
          {t('home:details.first.c')}
        </p>
        <p>
          {t('home:details.fourth.a')}{' '}
          <ExtLink
            to={'/uses'}
            label={t('home:details.fourth.b', { uses: t('common:uses') })}
            newTab={false}
          />
          .
        </p>
      </div>
      <div className={styles.find}>
        <p>
          <b>{t('home:find-me-on')}:</b>
        </p>
        <Social />
      </div>
      <SkillSet />
    </>
  );
};

export default About;
