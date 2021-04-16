import { NextApiRequest, NextApiResponse } from 'next';
import { getTopTracks } from '@lib/spotify';
import { unique } from '@utils/unique';
import { TopTrackData } from '@components/types';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getTopTracks();
  const { items = [] } = await response.json();

  const tracks = items.map((track: any) => ({
    // ...track,
    title: track.name,
    artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    album: track.album.name,
    url: track.external_urls.spotify,
    image: track.album.images.pop(),
  })).filter((it: TopTrackData) =>
    (!(it.title?.toLowerCase().includes('netflix')
      || it.album?.toLowerCase().includes('netflix'))));

  const uniqueArtistTracks = unique(tracks, 'artist').slice(0, 10);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({ tracks: uniqueArtistTracks });
};
