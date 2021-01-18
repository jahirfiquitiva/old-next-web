import useSWR from 'swr';
import Icon from '@mdi/react';
import { mdiAccountGroup, mdiStar } from '@mdi/js';
import fetcher from '@lib/fetcher';

const iconSize = 0.85;
const Stats = ({ className }: { className?: string }) => {
  const { data } = useSWR('/api/github', fetcher);

  if (!data || !data.success) return (<></>);

  return (
    <div>
      <a
        className={className}
        href={'https://github.com/jahirfiquitiva'} target={'_blank'}
        rel={'noopener noreferrer'}>
        <Icon path={mdiStar} size={iconSize}/><p>{data.stars || 0}</p>
        <Icon path={mdiAccountGroup} size={iconSize}/><p>{data.followers
      || 0}</p>
      </a>
    </div>
  );
};

export default Stats;
