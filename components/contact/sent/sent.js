import Link from 'next/link';
import BetterImage from '@components/global/better-image/better-image';
import styles from './sent.module.css';

const Sent = () => (
  <div className={styles.sent}>
    <h2 className={styles.title}>Thanks for your message!</h2>
    <p>I will get back to you as soon as possible 🙌</p>
    <Link href={'/'}>
      <a title={'home link'} aria-label={'home link'}
         className={`button ${styles.button}`}>Go Back Home</a>
    </Link>
    <BetterImage
      unsized
      loading={'lazy'}
      src={'/assets/images/gifs/mail.gif'}
      alt={'Dog checking mail'}/>
  </div>
);

export default Sent;
