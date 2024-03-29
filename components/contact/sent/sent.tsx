import Link from 'next/link';
import UnsizedImage from '@components/global/image/UnsizedImage';
import styles from './sent.module.css';

const Sent = () => (
  <div className={styles.sent}>
    <h2 className={styles.title}>Thanks for your message!</h2>
    <p>I will get back to you as soon as possible 🙌</p>
    <Link href={'/'}>
      <a title={'home link'} aria-label={'home link'}
         className={`button ${styles.button}`}>Go Back Home</a>
    </Link>
    <UnsizedImage
      src={'/assets/images/gifs/mail.gif'}
      alt={'Dog checking mail'}
      h={'360px'}
      allowNextComponent/>
  </div>
);

export default Sent;
