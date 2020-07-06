import Link from 'next/link';
import styles from './error.module.css';

const fhfError = 'Woops! ~ Page Not Found';
const fhfMessage = 'Unfortunately the site you were trying to reach does not exist'
  + ' or has been moved. 😥';

const errorError = 'Woops! ~ Something went wrong';
const errorMessage = 'Unfortunately an unexpected error occurred 😥. ';

const Error = ({ isFourHundredFour = false }) => {
  const renderContactMessage = () => {
    if (isFourHundredFour) return (<></>);
    return (
      <p>Feel free to <Link href={'/contact'}><a>contact me</a></Link> and share some details so I
        can try to fix it.</p>
    );
  };

  return (
    <div className={styles.error}>
      <h2 className={styles.title}>{isFourHundredFour ? fhfError : errorError}</h2>
      <p>{isFourHundredFour ? fhfMessage : errorMessage}</p>
      {renderContactMessage()}
      <Link href={'/'}>
        <a className={`button ${styles.button}`}>Go Back Home</a>
      </Link>
      <img
        src={isFourHundredFour ? '/static/images/gifs/404.gif' : '/static/images/gifs/monkey.gif'}
        alt={isFourHundredFour ? 'John Travolta GIF' : 'Monkey throwing laptop aggressively'}/>
    </div>
  );
};

export default Error;
