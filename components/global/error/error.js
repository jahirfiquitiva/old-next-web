import styles from './error.module.css';

const Error = () => {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>Woops! ~ Page Not Found</h2>
      <p>Unfortunately the site you were trying to reach does not exist or has been moved. 😥</p>
      <a className={'button'} href={'/'}>Go Back Home</a>
      <img
        src={'/static/images/error/404.gif'}
        alt={'John Travolta GIF'}/>
    </div>
  );
};

export default Error;
