import styles from './error.module.css';
import { error } from 'next/dist/build/output/log';

const fhfError = 'Woops! ~ Page Not Found';
const fhfMessage = 'Unfortunately the site you were trying to reach does not exist or has been moved. 😥';

const errorError = 'Woops! ~ Something went wrong';
const errorMessage = 'Unfortunately an unexpected error occurred 😥. ';

const Error = ({ isFourHundredFour = false }) => {
  const renderContactMessage = () => {
    if (isFourHundredFour) return (<></>);
    return (
      <p>Feel free to <a href={'/contact'}>contact me</a> and share some details so I can try to fix
        it.</p>
    );
  };

  return (
    <div className={styles.error}>
      <h2 className={styles.title}>{isFourHundredFour ? fhfError : errorError}</h2>
      <p>{isFourHundredFour ? fhfMessage : errorMessage}</p>
      {renderContactMessage()}
      <a className={'button'} href={'/'}>Go Back Home</a>
      <img
        src={'/static/images/error/404.gif'}
        alt={'John Travolta GIF'}/>
    </div>
  );
};

export default Error;
