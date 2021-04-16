import Link from 'next/link';
import { InspoItem } from '@components/types';
import styles from './inspiration.module.css';

const InspirationContent = ({ items }: { items: InspoItem[] }) => {
  const renderInspiration = () => {
    if (!items || !items.length) {
      return (
        <p className={styles.noinspo}>No inspiration items…</p>);
    }
    return (<div className={styles.grid}>
      {(items || []).map((it: InspoItem, i: number) => {
        return (<Link key={i} href={it.link}>
          <a title={it.title} aria-label={it.title}
             target={'_blank'}
             rel={'noopener noreferrer'}>
            <div className={styles.card}>
              <h6>{it.title}</h6>
              {(it.description?.length ?? 0 > 0) && (<p>{it.description}</p>)}
              <div className={styles.url}>
                <img src={it.favicon ?? ''} width={24} height={24}/>
                <p>{it.link}</p>
              </div>
            </div>
          </a>
        </Link>);
      })}
    </div>);
  };

  return (
    <div className={styles.inspiration}>
      <h3 className={styles.title}>🍀&nbsp;&nbsp;
        <span className={'text-gradient grad-c'}>
          Inspiration
        </span>
      </h3>
      <p>
        These are some people, websites and tools that have been inspiration to
        build this website and some of my projects (it could be either design or
        features or even both 😅)
      </p>
      {renderInspiration()}
    </div>
  );
};

export default InspirationContent;
