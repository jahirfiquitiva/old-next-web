import Icon from '@mdi/react';
import { mdiTwitter, mdiGithub, mdiLinkedin, mdiInstagram } from '@mdi/js';
import styles from './social.module.css';

const Social = ({ centered }) => {

  return (
    <div className={`${styles.social} ${centered ? styles.centered : ''}`}>
      <a className={`button ${styles.button} ${styles.twitter}`}
         href={'https://twitter.com/jahirfiquitiva'}
         rel={'noopener noreferrer'} target={'_blank'}>
        <Icon path={mdiTwitter} size={.8}/>
      </a>
      <a className={`button ${styles.button} ${styles.github}`}
         href={'https://github.com/jahirfiquitiva'}
         rel={'noopener noreferrer'} target={'_blank'}>
        <Icon path={mdiGithub} size={.8}/>
      </a>
      <a className={`button ${styles.button} ${styles.linkedin}`}
         href={'https://linkedin.com/in/jahirfiquitiva'}
         rel={'noopener noreferrer'} target={'_blank'}>
        <Icon path={mdiLinkedin} size={.8}/>
      </a>
      <a className={`button ${styles.button} ${styles.instagram}`}
         href={'https://instagram.com/jahirfiquitiva'}
         rel={'noopener noreferrer'} target={'_blank'}>
        <Icon path={mdiInstagram} size={.8}/>
      </a>
    </div>
  );
};

export default Social;
