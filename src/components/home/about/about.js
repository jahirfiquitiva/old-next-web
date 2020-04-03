import React, { useEffect, useState } from 'react';
import MDIconText from '../../base/mdi/mdicon-text';
import TextLink from '../../base/link/text-link';
import SocialLinks from '../../base/copyright/social-links';
import Button from '../button/button';
import styles from './about.module.scss';

const hellos = ['Hello, world', 'Hola, mundo', 'Ciao, mondo', 'Hallo, Welt', 'Salut, monde',
  'Olá, mundo'];

const About = () => {
  const [hello, setHello] = useState(0);
  const [detailsShown, setDetailsShown] = useState(false);

  useEffect(() => {
    const changeHello = setInterval(() => {
      setHello((helloo) => (helloo >= hellos.length - 1 ? 0 : helloo + 1));
    }, 2000);
    return () => clearInterval(changeHello);
  }, []);

  const renderDetails = () => {
    if (!detailsShown) return (<></>);
    return (
      <>
        <br/><br/>
        <div className={'has-text-justified'}>
          <p>I&apos;m currently a Computer Science student at&nbsp;
            <TextLink url={'http://www.uptc.edu.co'}
                      text={'Pedagogical and Technological University of Colombia'}/>.
          </p>
          <br/>
          <p>I consider myself a curious and inquisitive person, so on my spare time I like to work
             on <TextLink url={'#projects'} text={'side projects'} openInNewTab={false}/> and try to
             constantly learn something new to improve my skillset.</p>
          <br/>
          <p>I have open <TextLink url={'https://jahir.xyz/twitterdm'}
                                   text={'Twitter DMs'}/>,&nbsp;
            <TextLink url={'https://jahir.xyz/tlgrm'} text={'Telegram'}/> and&nbsp;
            <TextLink url={'/contact'} text={'email'}/> for any kind of inquiries. 🤗</p>
          <br/>
          <p>If you are interested in knowing which tools I use, you can&nbsp;
            <TextLink url={'/uses'} text={'check out my uses page'}/>.
          </p>
        </div>
      </>
    );
  };

  return (
    <div className={'has-text-centered'}>
      <img className={styles.avatar} src={'/images/me/me.jpg'} alt={'Jahir Fiquitiva'}/>
      <br/><br/>
      <h3 className={'has-text-shadow has-text-weight-semibold is-yellow'}>{hellos[hello]}! 👋</h3>
      <h3 className={'has-text-shadow has-text-weight-semibold is-cyan'}>I am Jahir Fiquitiva</h3>
      <br/>
      <p className={'has-text-justified'}>
        I&apos;m a passionate and creative full-stack developer
        from <a href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
                rel={'noopener noreferrer'}
                target={'_blank'}>Colombia 🇨🇴</a>.
      </p>
      <br/>
      <button className={'button is-primary'}
              onClick={() => setDetailsShown(!detailsShown)}>
        <MDIconText text={`${detailsShown ? 'Less' : 'More'} about me`}
                    iconName={detailsShown ? 'minus' : 'plus'}/>
      </button>
      {renderDetails()}
      <br/><br/>
      <p className={'has-text-weight-medium'}>Find me on:</p>
      <br/>
      <SocialLinks/>
      <Button/>
    </div>
  );
};

export default About;
