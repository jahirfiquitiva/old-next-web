import styles from './form.module.css';
import ExtLink from '@components/global/ext-link/ext-link';
import Icon from '@mdi/react';
import { mdiEmailSendOutline } from '@mdi/js';

const ContactForm = () => {
  return (
    <div className={styles.contact}>
      <h3 className={styles.title}>📮&nbsp;&nbsp;Contact</h3>
      <p><b>Don't hesitate contacting me!</b></p>
      <p>
        PS: I also have open <ExtLink to={'https://jahir.xyz/twitterdm'}
                                      label={'Twitter DMs'}/>&nbsp;and&nbsp;
        <ExtLink to={'https://jahir.xyz/tlgrm'} label={'Telegram'}/> for any kind of inquiries. 😀
      </p>
      <form name="contact" action="/sent" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact"/>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" name="name" id="name" placeholder={'Jon Doe'}/>
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Your Email: </label>
            <input type="email" name="email" id="email" placeholder={'jon.doe@email.com'}/>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="subject">Subject: </label>
          <input type="text" name="subject" id="subject" placeholder={'Let\'s work together!'}/>
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message: </label>
          <textarea name="message" id="message" placeholder={'Hi Jahir…'}/>
        </div>
        <button type="submit">
          <Icon path={mdiEmailSendOutline} size={1} color={'#fff'}/>Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
