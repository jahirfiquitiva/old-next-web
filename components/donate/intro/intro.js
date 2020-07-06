import Icon from '@mdi/react';
import { mdiGithub, mdiPizza, mdiCreditCardOutline } from '@mdi/js';
import ExtLink from '@components/global/ext-link/ext-link';
import styles from './intro.module.css';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h3 className={styles.title}>💙&nbsp;&nbsp;Donate</h3>
      <p>
        I try really hard to build great apps and provide the best possible experience and products
        to all users, and most of them are <ExtLink to={'https://github.com/jahirfiquitiva'}
                                                    label={'open source'}/>. However, that
        wouldn&apos;t be possible without the help and the motivation from <a
        href={'#supporters'}>supporters</a>!
      </p>
      <p>
        <b>
          If you like and/or use any of <ExtLink to={'/#projects'} newTab={false}
                                                 label={'my projects'}/>, or want to support my
          work, please kindly consider donating, so I can continue maintaining and improving them as
          well as creating new ones.
        </b>
      </p>
      <p>
        Whatever I receive, will be highly appreciated. Thanks in advance! 🤗
      </p>
      <p className={styles.btitle}><b>Donation options:</b></p>
      <div className={styles.buttons}>
        <a className={`button ${styles.button} ${styles.github}`}>
          <Icon path={mdiGithub} size={0.9} color={'#fff'}/>GitHub Sponsors
        </a>
        <a className={`button ${styles.button} ${styles.bmac}`}>
          <Icon path={mdiPizza} size={0.9} color={'#fff'}/>Buy Me a Pizza
        </a>
        <a className={`button ${styles.button} ${styles.paypal}`}>
          <Icon path={mdiCreditCardOutline} size={0.9} color={'#fff'}/>PayPal
        </a>
      </div>
    </div>
  );
};

export default Intro;
