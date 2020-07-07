import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import styles from './changes.module.css';
import ReactMarkdown from 'react-markdown';
import Icon from '@mdi/react';
import { mdiGithub, mdiHelpCircle, mdiTranslate } from '@mdi/js';

const ChangesContent = () => {
  const { data } = useSWR('/api/changes', fetcher);

  const getLocaleDate = (stamp, def) => {
    if (!stamp) return def ? def.toString() : '';
    try {
      return new Date(stamp).toLocaleDateString();
    } catch (e) {
      return def ? def.toString() : '';
    }
  };

  const renderVersion = (version) => {
    if (!version || version.length <= 0) return (<></>);
    return (<span className={styles.version}>{version || ''}</span>);
  };

  const renderReleaseDate = (stamp, def) => {
    const date = getLocaleDate(stamp, def);
    if (!date || date.length <= 0) return (<></>);
    return (<p>Released on: {date}</p>);
  };

  const renderChanges = () => {
    if (!data) return (<p>Loading…</p>);
    if (!data.results || data.results.length <= 0) return (<p>No changes found!</p>);
    return (<div className={styles.grid}>
      {(data.results || []).map((it, i) => {
        return (<div key={i} className={styles.card}>
          <div className={styles.details}>
            <div className={styles.app}>
              <h5>{it.name}</h5>
              {renderVersion()}
            </div>
            {renderReleaseDate(it.dateStamp, it.date)}
            <ReactMarkdown
              source={it.changelog || ''} escapeHtml={false}
              className={styles.content}/>
          </div>
          <div className={styles.buttons}>
            <a className={`button ${styles.button} ${styles.github}`}
               href={it.url}
               rel={'noopener noreferrer'} target={'_blank'}>
              <Icon path={mdiGithub} size={0.8}/>
            </a>
            {it.wiki
              ? (<a className={`button ${styles.button} ${styles.github}`}
                    href={it.wiki}
                    rel={'noopener noreferrer'} target={'_blank'}>
                <Icon path={mdiHelpCircle} size={0.8}/>
              </a>)
              : (<></>)}
            {it.translate
              ? (<a className={`button ${styles.button} ${styles.translate}`}
                    href={it.translate}
                    rel={'noopener noreferrer'} target={'_blank'}>
                <Icon path={mdiTranslate} size={0.8}/>
              </a>)
              : (<></>)}
            {it.download
              ? (<a className={`button ${styles.button} ${styles.github}`}
                    href={it.url}
                    rel={'noopener noreferrer'} target={'_blank'}>
                <Icon path={mdiGithub} size={0.8}/>
              </a>)
              : (<></>)}
          </div>
        </div>);
      })}
    </div>);
  };

  return (
    <div className={styles.changes}>
      <h3 className={styles.title}>✨&nbsp;&nbsp;Changes</h3>
      {renderChanges()}
    </div>
  );
};

export default ChangesContent;
