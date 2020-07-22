import redirect from 'nextjs-redirect';
import styles from './goto.module.css';
import Head from 'next/head';

const GoTo = ({ url, title }) => {
  const Redirect = redirect(url);
  return (
    <Redirect>
      <Head>
        <title>Redirecting you to {title || url} …</title>
      </Head>
      <div className={styles.redirection}>
        <h3>☄️</h3>
        <p>
          Redirecting you to <a name={title || url} aria-label={title || url}
                                href={url} target={'_self'}>{url}</a> …
        </p>
      </div>
    </Redirect>
  );
};

export default GoTo;
