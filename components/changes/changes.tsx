import React from 'react';
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import Icon from '@mdi/react';
import {
  mdiDownloadOutline, mdiGithub, mdiHelpCircleOutline, mdiTranslate
} from '@mdi/js';
import fetcher from '@lib/fetcher';
import { FullRepoData } from '@components/types';
import styles from './changes.module.css';

const ChangesContent = () => {
  const { data } = useSWR('/api/changes', fetcher);

  const getLocaleDate = (stamp?: string, def?: string) => {
    if (!stamp) return def ? def.toString() : '';
    try {
      return new Date(stamp).toLocaleDateString();
    } catch (e) {
      return def ? def.toString() : '';
    }
  };

  const renderVersion = (version?: string) => {
    if (!version || version.length <= 0) return (<></>);
    return (<span className={styles.version}>{version || ''}</span>);
  };

  const renderReleaseDate = (stamp?: string, def?: string) => {
    const date = getLocaleDate(stamp, def);
    if (!date || date.length <= 0) return (<></>);
    return (<p>Released on: {date}</p>);
  };

  const renderChanges = () => {
    if (!data) return (<p>Loading…</p>);
    if (!data.results || data.results.length <= 0) {
      return (
        <p>No changes found!</p>);
    }
    return (<div className={styles.grid}>
      {(data.results || []).map((it: FullRepoData, i: number) => {
        return (<div key={i} className={styles.card}>
          <div className={styles.details}>
            <div className={styles.app}>
              <h5>{it.name}</h5>
              {renderVersion(it.version)}
            </div>
            {renderReleaseDate(it.dateStamp, it.date)}
            <ReactMarkdown className={styles.content}>
              {it.changelog || ''}
            </ReactMarkdown>
          </div>
          <div className={styles.buttons}>
            <a
              title={'GitHub repository link'}
              aria-label={'GitHub repository link'}
              className={`button ${styles.button} ${styles.github}`}
              href={it.url} rel={'noopener noreferrer'} target={'_blank'}>
              <Icon path={mdiGithub} size={0.8}/>
            </a>
            {it.wiki
             ? (<a
                title={'GitHub Wiki link'} aria-label={'GitHub Wiki link'}
                className={`button ${styles.button} ${styles.github}`}
                href={it.wiki} rel={'noopener noreferrer'} target={'_blank'}>
               <Icon path={mdiHelpCircleOutline} size={0.8}/>
             </a>)
             : (<></>)}
            {it.translateLink
             ? (<a
                title={'Translation site link'}
                aria-label={'Translation site link'}
                className={`button ${styles.button} ${styles.translate}`}
                href={it.translateLink} rel={'noopener noreferrer'}
                target={'_blank'}>
               <Icon path={mdiTranslate} size={0.8}/>
             </a>)
             : (<></>)}
            {it.download
             ? (<a
                title={'Download sample link'}
                aria-label={'Download sample link'}
                className={`button ${styles.button}`}
                href={it.download} rel={'noopener noreferrer'}
                target={'_blank'}>
               <Icon path={mdiDownloadOutline} size={0.8}/>
             </a>)
             : (<></>)}
          </div>
        </div>);
      })}
    </div>);
  };

  return (
    <div className={styles.changes}>
      <h3 className={styles.title}>✨&nbsp;&nbsp;
        <span className={'text-gradient grad-d'}>
          Changes
        </span>
      </h3>
      {renderChanges()}
    </div>
  );
};

export default ChangesContent;
