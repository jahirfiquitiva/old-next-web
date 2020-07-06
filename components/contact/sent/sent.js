import Link from 'next/link';
import styles from './sent.module.css';

const Sent = () => {
  return (
    <div className={styles.sent}>
      <h2 className={styles.title}>Thanks for your message!</h2>
      <p>I will get back to you as soon as possible 🙌</p>
      <Link href={'/'}>
        <a className={`button ${styles.button}`}>Go Back Home</a>
      </Link>
      <img
        src={'/assets/images/gifs/mail.gif'}
        alt={'Dog checking mail'}/>
    </div>
  );
};

export default Sent;
