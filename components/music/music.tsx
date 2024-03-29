import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '@lib/fetcher';
import { TopTrackData, TrackData } from '@components/types';
import styles from './music.module.css';
import { usePalette } from 'react-palette';
import { useContext } from 'react';
import ThemeContext from '@components/theme/ThemeContext';
import Icon from '@mdi/react';
import { mdiSpotify } from '@mdi/js';

interface SongCardProps extends TrackData {
  isForNowPlaying?: boolean
}

const SongCard = (props: SongCardProps) => {
  const { isForNowPlaying, isPlaying } = props;
  const shouldRenderDetails = (!isForNowPlaying || isPlaying);

  const { isDark } = useContext(ThemeContext);
  const { data: paletteData }
    = shouldRenderDetails
      ? usePalette(props.image?.url ?? '') || { data: null }
      : { data: null };

  const preSize: number = ((props.image?.width ?? 0)
    + (props.image?.height ?? 0));
  const size: number = preSize > 0 ? preSize > 128 ? 96 : 72 : 0;

  const renderAlbumImage = () => {
    if (shouldRenderDetails && props.image) {
      return <Image
        src={props.image?.url ?? ''}
        width={size}
        height={size}
        objectFit={'cover'}
        objectPosition={'center'}
      />;
    }
    return <Icon path={mdiSpotify} size={2} color={'#1ED760'}/>;
  };

  const backgroundColor: string | undefined = paletteData
                                              ? isDark
                                                ? paletteData?.darkMuted
                                                  ?? undefined
                                                : paletteData?.lightVibrant
                                                  ?? undefined
                                              : undefined;

  const textColor: string | undefined = paletteData
                                        ? isDark
                                          ? paletteData?.lightVibrant
                                            ?? undefined
                                          : paletteData?.darkMuted ?? undefined
                                        : undefined;

  const renderActualCard = () => {
    return <div
      className={styles.card}
      style={{ backgroundColor }}>
      <div className={[styles.overlay,
        shouldRenderDetails && paletteData ? styles.valid : ''].join(' ')}>
        <div className={styles.album}
             style={{ minWidth: shouldRenderDetails ? size : 0 }}>
          {renderAlbumImage()}
        </div>
        <div
          className={styles.details}
          style={{ color: textColor, borderColor: textColor }}>
          <h6>{((props.title?.length ?? 0) > 0 && shouldRenderDetails)
               ? props.title
               : 'Nothing'}</h6>
          {shouldRenderDetails && (<p>{props.artist}{' • '}{props.album}</p>)}
        </div>
      </div>
    </div>;
  };

  if (props.url && shouldRenderDetails) {
    return (<Link href={props.url ?? '#'}>
      <a title={props.title} aria-label={props.title}
         target={'_blank'}
         rel={'noopener noreferrer'}
         style={{ color: textColor }}>
        {renderActualCard()}
      </a>
    </Link>);
  }
  return renderActualCard();
};

const MusicContent = () => {
  const { data: nowPlayingData } = useSWR('/api/now-playing', fetcher);
  const { data: topTracksData } = useSWR('/api/top-tracks', fetcher);

  const renderMusic = () => {
    if (!topTracksData) return (<p>Loading…</p>);
    if (!topTracksData.tracks || topTracksData.tracks.length <= 0) {
      return (
        <p>No top tracks found!</p>);
    }
    return (<div className={styles.grid}>
      {(topTracksData.tracks || []).map((it: TopTrackData, i: number) => {
        return <SongCard key={i} {...it} />;
      })}
    </div>);
  };

  const renderNowPlaying = () => {
    if (!nowPlayingData) return (<p>Loading…</p>);
    return <SongCard isForNowPlaying {...nowPlayingData} />;
  };

  return (
    <div className={styles.music}>
      <h3 className={styles.title}>🎧&nbsp;&nbsp;
        <span className={'text-gradient grad-b'}>
          Music
        </span>
      </h3>
      <h4>Now Playing</h4>
      {renderNowPlaying()}
      <h4>Top Tracks</h4>
      {renderMusic()}
    </div>
  );
};

export default MusicContent;
