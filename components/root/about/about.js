import { useState, useEffect } from 'react';
import ExtLink from '@components/global/ext-link/ext-link';
import styles from './about.module.css';
import Social from '@components/global/social/social';
import SkillSet from '@components/root/skillset/skillset';

const hellos = ['Hello, world', 'Hola, mundo', 'Ciao, mondo', 'Hallo, Welt', 'Salut, monde',
  'Olá, mundo'];

const About = () => {
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
          <h3><span className={styles.wave}>👋</span>&nbsp;&nbsp;{hellos[hello]}!</h3>
          <h3>I am Jahir Fiquitiva</h3>
          <br/>
          <p> I'm a passionate and creative full-stack developer from <ExtLink
            to={'https://www.google.com/maps/place/Colombia/@4,-72z/'} label={'Colombia 🇨🇴'}/></p>
        </div>
        <div className={styles.photocontainer}>
          <img
            src={'https://jahir.dev/assets/images/me/me.jpg'} alt={'Jahir\'s Photo'}
            className={styles.photo} height={168} width={168}/>
        </div>
      </div>
      <div className={styles.details}>
        <p>
          I&apos;m currently a Computer Science student at&nbsp;
          <ExtLink to={'http://www.uptc.edu.co'}
                   label={'Pedagogical and Technological University of Colombia'}/>.
        </p>
        <p>
          I consider myself a curious and inquisitive person, so on my spare time I like to work
          on <ExtLink to={'#projects'} label={'side projects'} newTab={false}/> and try to
          constantly learn something new to improve my skillset.</p>
        <p>
          I have open <ExtLink to={'https://jahir.xyz/twitterdm'} label={'Twitter DMs'}/>,&nbsp;
          <ExtLink to={'https://jahir.xyz/tlgrm'} label={'Telegram'}/> and&nbsp;
          <ExtLink to={'/contact'} label={'email'} newTab={false}/> for any kind of inquiries. 🤗
        </p>
        <p>
          If you are interested in knowing which tools I use, you can&nbsp;
          <ExtLink to={'/uses'} label={'check out my uses page'} newTab={false}/>.
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
