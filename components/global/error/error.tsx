import Link from 'next/link';
import UnsizedImage from '@components/global/image/UnsizedImage';
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
      <p>Feel free to <Link href={'/contact'}><a>contact me</a></Link> and share
        some details so I can try to fix it.</p>
    );
  };

  const renderSiteContent = () => {
    return (<>
      <h2 className={styles.title}>{isFourHundredFour
                                    ? fhfError
                                    : errorError}</h2>
      <p>{isFourHundredFour ? fhfMessage : errorMessage}</p>
      {renderContactMessage()}
      <Link href={'/'}>
        <a title={'home link'} aria-label={'home link'}
           className={`button ${styles.button}`}>Go Back Home</a>
      </Link>
    </>);
  };

  return (
    <div className={`${styles.error} ${isFourHundredFour ? styles.fhf : ''}`}>
      {isFourHundredFour
       ? (<div className={styles.errorContent}>{renderSiteContent()}</div>)
       : renderSiteContent()}
      <UnsizedImage
        h={isFourHundredFour ? '476px' : '180px'}
        src={isFourHundredFour
             ? '/assets/images/gifs/404.gif'
             : '/assets/images/gifs/monkey.gif'}
        alt={isFourHundredFour
             ? 'John Travolta GIF'
             : 'Monkey throwing laptop aggressively'}/>
    </div>
  );
};

export default Error;
