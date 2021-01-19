import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiEmailSendOutline } from '@mdi/js';
import { formium } from '@lib/formium';
import ExtLink from '@components/global/ext-link/ext-link';
import styles from './form.module.css';

interface FormData {
  name?: string,
  email?: string,
  subject?: string,
  message?: string,
}

const ContactForm = (props: any) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormData>({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const getFormErrors = (): FormData => {
    const errors: { name?: string, email?: string, subject?: string, message?: string } = {};
    if (name.length <= 0) errors.name = 'Your name must not be empty';
    if (subject.length <= 0) errors.subject = 'Subject must not be empty';
    if (message.length <= 0) errors.message = 'Message must not be empty';
    if (message.length <= 50)
      errors.message = 'Message should be at least 50 characters long';
    if (email.length <= 0) errors.email = 'Your email must not be empty';
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
      errors.email = 'Your email seems to not be valid';
    return errors;
  };

  const finishSubmission = (success: boolean) => {
    setErrors({});
    setSubmitting(false);
    window.location.href = success ? '/sent' : '/error';
  };

  const customFormSubmit = async (e: any) => {
    e.preventDefault();
    const errors = getFormErrors();
    setErrors(errors);
    if (Object.keys(errors).length) {
      return;
    }
    setSubmitting(true);
    await formium.submitForm(props.form.slug, { name, email, subject, message })
      .then((data?: any) => {
        finishSubmission(data && data.ok);
      })
      .catch((_: any) => {
        finishSubmission(false);
      });
  };

  return (
    <div className={styles.contact}>
      <h3 className={styles.title}>📮&nbsp;&nbsp;Contact</h3>
      <p><b>Don&apos;t hesitate contacting me!</b></p>
      <p>
        PS: I also have open <ExtLink to={'https://jahir.xyz/twitterdm'}
                                      label={'Twitter DMs'}/>&nbsp;and&nbsp;
        <ExtLink to={'https://jahir.xyz/tlgrm'} label={'Telegram'}/> for any
        kind of inquiries. 😀
      </p>
      <form onSubmit={customFormSubmit}>
        <input type={'hidden'} name={'form-name'} value={'contact'}/>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor={'name'}>Your Name</label>
            <input type={'text'} name={'name'} id={'name'}
                   placeholder={'Jon Doe'} required disabled={submitting}
                   value={name}
                   onChange={(e) => setName(e.target.value.toString())}/>
            {errors.name?.length &&
            <p className={styles.error}>{errors.name || ''}</p>}
          </div>
          <div className={styles.field}>
            <label htmlFor={'email'}>Your Email</label>
            <input
              required disabled={submitting}
              type={'email'} name={'email'} id={'email'}
              placeholder={'jon.doe@email.com'}
              value={email}
              onChange={(e) => setEmail(e.target.value.toString())}/>
            {errors.email?.length &&
            <p className={styles.error}>{errors.email || ''}</p>}
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor={'subject'}>Subject</label>
          <input
            required disabled={submitting}
            type={'text'} name={'subject'} id={'subject'}
            placeholder={'Let\'s work together!'}
            value={subject}
            onChange={(e) => setSubject(e.target.value.toString())}/>
          {errors.subject?.length &&
          <p className={styles.error}>{errors.subject || ''}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor={'message'}>Message</label>
          <textarea name={'message'} id={'message'} placeholder={'Hi Jahir…'}
                    required disabled={submitting}
                    value={message}
                    onChange={(e) => setMessage(e.target.value.toString())}/>
          {errors.message?.length &&
          <p className={styles.error}>{errors.message || ''}</p>}
        </div>
        <button
          name={'Send Email'} aria-label={'Send Email'}
          type={'submit'} disabled={submitting}>
          <Icon path={mdiEmailSendOutline} size={1}/>Send
        </button>
        {submitting && <p>Sending message...</p>}
      </form>
    </div>
  );
};

export default ContactForm;
