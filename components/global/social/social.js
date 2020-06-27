import Icon from '@mdi/react';
import { mdiTwitter, mdiGithub, mdiLinkedin, mdiInstagram } from '@mdi/js';
import styles from './social.module.css';

const Social = ({ centered }) => {

  return (
    <div className={`${styles.social} ${centered ? styles.centered : ''}`}>
      <button className={styles.twitter}>
        <Icon path={mdiTwitter} size={.8}/>
      </button>
      <button className={styles.github}>
        <Icon path={mdiGithub} size={.8}/>
      </button>
      <button className={styles.linkedin}>
        <Icon path={mdiLinkedin} size={.8}/>
      </button>
      <button className={styles.instagram}>
        <Icon path={mdiInstagram} size={.8}/>
      </button>
    </div>
  );
};

export default Social;
