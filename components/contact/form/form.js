import { useState } from 'react';
import { useForm } from '@statickit/react';
import Icon from '@mdi/react';
import { mdiEmailSendOutline } from '@mdi/js';
import ExtLink from '@components/global/ext-link/ext-link';
import styles from './form.module.css';

const ContactForm = () => {
  const [state, submit] = useForm('contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (state.succeeded) {
    window.location.href = '/sent';
  }

  return (
    <div className={styles.contact}>
      <h3 className={styles.title}>📮&nbsp;&nbsp;Contact</h3>
      <p><b>Don&apos;t hesitate contacting me!</b></p>
      <p>
        PS: I also have open <ExtLink to={'https://jahir.xyz/twitterdm'}
                                      label={'Twitter DMs'}/>&nbsp;and&nbsp;
        <ExtLink to={'https://jahir.xyz/tlgrm'} label={'Telegram'}/> for any kind of inquiries. 😀
      </p>
      <form onSubmit={submit}>
        <input type={'hidden'} name={'form-name'} value={'contact'}/>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor={'name'}>Your Name</label>
            <input type={'text'} name={'name'} id={'name'} placeholder={'Jon Doe'} required
                   value={name} onChange={(e) => setName(e.target.value.toString())}/>
          </div>
          <div className={styles.field}>
            <label htmlFor={'email'}>Your Email</label>
            <input
              required
              type={'email'} name={'email'} id={'email'} placeholder={'jon.doe@email.com'}
              value={email} onChange={(e) => setEmail(e.target.value.toString())}/>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor={'subject'}>Subject</label>
          <input
            required
            type={'text'} name={'subject'} id={'subject'} placeholder={'Let\'s work together!'}
            value={subject} onChange={(e) => setSubject(e.target.value.toString())}/>
        </div>
        <div className={styles.field}>
          <label htmlFor={'message'}>Message</label>
          <textarea name={'message'} id={'message'} placeholder={'Hi Jahir…'} required
                    value={message} onChange={(e) => setMessage(e.target.value.toString())}/>
        </div>
        <button
          name={'Send Email'} aria-label={'Send Email'}
          type={'submit'} disabled={state.submitting}>
          <Icon path={mdiEmailSendOutline} size={1}/>Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
