import data from './supporters.json';
import styles from './supporters.module.css';

const Supporters = () => {
  return (
    <div className={styles.supporters}>
      <h3 className={styles.title}>🙌&nbsp;&nbsp;Thanks!</h3>
      <p>I'm really grateful to all the awesome people that support my work.</p>
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
    </div>
  );
};

export default Supporters;
