import Link from 'next/link';
import UnsizedImage from '@components/global/image/UnsizedImage';
import styles from './construction.module.css';

const UnderConstruction = () => {
  return (
    <div className={styles.construction}>
      <h2 className={styles.title}>Site under (re)construction!</h2>
      <p>Please bear with me as I work really hard to bring this site (back) to life 😬</p>
      <Link href={'/'}>
        <a title={'home link'} aria-label={'home link'}
           className={`button ${styles.button}`}>Go Back Home</a>
      </Link>
      <UnsizedImage
        src={'/assets/images/gifs/construction.gif'}
        alt={'Man falling while working on a construction'}/>
    </div>
  );
};

export default UnderConstruction;
