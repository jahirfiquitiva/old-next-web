import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ExtLink from '@components/global/ext-link/ext-link';
import Social from '@components/global/social/social';
import SkillSet from '@components/root/skillset/skillset';
import styles from './about.module.css';
import useTranslation from 'next-translate/useTranslation';

const hellos = ['Hello, world', 'Hola, mundo', 'Ciao, mondo', 'Hallo, Welt',
  'Salut, monde', 'Olá, mundo'];

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
          <br/>
          <p>
            {t('home:description')}{' '}
            <ExtLink
              to={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
              label={'Colombia 🇨🇴'}/>
          </p>
        </div>
        <div className={styles.photocontainer}>
          <Image
            loading={'lazy'}
            src={'/assets/images/me/me.jpg'} alt={'Jahir\'s Photo'}
            className={styles.photo}
            height={168} width={168}/>
        </div>
      </div>
      <div className={styles.details}>
        <p>
          {t('home:details.first.a')}{' '}
          <ExtLink to={'#projects'}
                   label={t('home:details.first.b')}
                   newTab={false}/>
          {' '}{t('home:details.first.c')}
        </p>
        <p>
          <Link href={'/thanks'}>
            <a title={'link to thanks page'} aria-label={'link to thanks page'}>
              {t('home:details.second.a')}
            </a>
          </Link>
          {' '}{t('home:details.second.b')}{' '}
          <Link
            href={'/blog/post-of-fame'}>
            <a title={'link to thanks page'} aria-label={'link to thanks page'}>
              {t('home:details.second.c')}
            </a>
          </Link>
          {t('home:details.second.d')}
        </p>
        <p>
          I have open <ExtLink to={'https://jahir.xyz/twitterdm'}
                               label={'Twitter DMs'}/>,&nbsp;
          <ExtLink to={'https://jahir.xyz/tlgrm'} label={'Telegram'}/> and&nbsp;
          <ExtLink to={'/contact'} label={'email'} newTab={false}/> for any kind
          of inquiries. 🤗
        </p>
        <p>
          If you are interested in knowing which tools I use, you can&nbsp;
          <ExtLink to={'/uses'} label={'check out my uses page'}
                   newTab={false}/>.
        </p>
      </div>
      <div className={styles.find}>
        <p><b>You can find me on:</b></p>
        <Social/>
      </div>
      <SkillSet/>
    </>
  );
};

export default About;
