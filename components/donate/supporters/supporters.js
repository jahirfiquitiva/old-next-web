import data from './supporters.json';
import styles from './supporters.module.css';
import ExtLink from '@components/global/ext-link/ext-link';

const Supporters = () => {
  const renderSupportersPhotos = () => {
    return (<ul>
      {(data || []).map((it, i) => {
        return (
          <li key={i}>
            <ExtLink to={it.link} label={it.name}/>
          </li>
        );
      })}
    </ul>);
    /*
    return (
      <div className={styles.list}>
        {(data || []).map((it, i) => {
          return (
            <a key={i} href={it.link} target={'_blank'}
               rel={'noopener noreferrer'}
               className={styles.supporter}
               style={{ backgroundImage: `url(${it.photo || ''})` }}/>
          );
        })}
      </div>
    );
     */
  };

  return (
    <div className={styles.supporters}>
      <h3 className={styles.title}>🙌&nbsp;&nbsp;Thanks!</h3>
      <p>I&apos;m really grateful to all the awesome people that support my work.</p>
      {renderSupportersPhotos()}
    </div>
  );
};

export default Supporters;
