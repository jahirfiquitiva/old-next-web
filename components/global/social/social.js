import Icon from '@mdi/react';
import { mdiGithub, mdiInstagram, mdiLinkedin, mdiTwitch, mdiTwitter } from '@mdi/js';
import styles from './social.module.css';

const iconSize = 0.8;
const Social = ({ centered }) => {
  return (
    <div className={`${styles.social} ${centered ? styles.centered : ''}`}>
      <a
        title={'Twitter link'} aria-label={'Twitter link'}
        className={`button ${styles.button} ${styles.twitter}`}
        href={'https://twitter.com/jahirfiquitiva'}
        rel={'noopener noreferrer'} target={'_blank'}>
        <Icon path={mdiTwitter} size={iconSize}/>
      </a>
      <a
        title={'GitHub link'} aria-label={'GitHub link'}
        className={`button ${styles.button} ${styles.github}`}
        href={'https://github.com/jahirfiquitiva'}
        rel={'noopener noreferrer'} target={'_blank'}>
        <Icon path={mdiGithub} size={iconSize}/>
      </a>
      <a
        title={'LinkedIn link'} aria-label={'LinkedIn link'}
        className={`button ${styles.button} ${styles.linkedin}`}
        href={'https://linkedin.com/in/jahirfiquitiva'}
        rel={'noopener noreferrer'} target={'_blank'}>
        <Icon path={mdiLinkedin} size={iconSize}/>
      </a>
      <a
        title={'Instagram link'} aria-label={'Instagram link'}
        className={`button ${styles.button} ${styles.instagram}`}
        href={'https://instagram.com/jahirfiquitiva'}
        rel={'noopener noreferrer'} target={'_blank'}>
        <Icon path={mdiInstagram} size={iconSize}/>
      </a>
      <a
        title={'Twitch link'} aria-label={'Twitch link'}
        className={`button ${styles.button} ${styles.twitch}`}
        href={'https://twitch.tv/jahirdotdev'}
        rel={'noopener noreferrer'} target={'_blank'}>
        <Icon path={mdiTwitch} size={iconSize}/>
      </a>
    </div>
  );
};

export default Social;
