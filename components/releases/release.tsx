import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import styles from './release.module.css';

export interface ReleaseProps {
  repo: string,
}

const Release = ({ repo }: ReleaseProps) => {
  const { data } = useSWR(`/api/download?repo=${repo}`, fetcher);

  if (data && data.download) {
    window.location.href = data.download;
  }

  const renderContent = () => {
    if (data) {
      if (data.success) {
        return (<>
          <h1 style={{ margin: 0 }}>🎉</h1>
          <h4>Download started!</h4>
          <br/>
          <p>Feel free to close this tab 😉</p>
        </>);
      } else {
        return (<>
          <h1 style={{ margin: 0 }}>😮</h1>
          <h4>Oh no!</h4>
          <br/>
          <p>Direct download is not available right now 😕</p>
          <p>
            I will redirect you to&nbsp;
            <a title={'GitHub releases link'}
               aria-label={'GitHub releases link'} href={data.download}>GitHub
              Releases</a> …
          </p>
        </>);
      }
    }
    return (<h3>🤓&nbsp;&nbsp;Loading…</h3>);
  };

  return (
    <div className={styles.release}>
      {renderContent()}
    </div>
  );
};

export default Release;
