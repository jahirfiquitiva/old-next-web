import styles from './construction.module.css';

const UnderConstruction = () => {
  return (
    <div className={styles.construction}>
      <h2 className={styles.title}>Site under (re)construction!</h2>
      <p>Please bear with me as I work really hard to bring this site (back) to life 😬</p>
      <a className={'button'} href={'/'}>Go Back Home</a>
      <img
        src={'/static/images/error/construction.gif'}
        alt={'Man falling while working on a construction'}/>
    </div>
  );
};

export default UnderConstruction;
