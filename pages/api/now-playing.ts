import { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from '@lib/spotify';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist: any) => _artist.name)
    .join(', ');
  const album = song.item.album.name;
  const preAlbumImage = song.item.album.images.pop();
  const albumImage = song.item.album.images.pop() || preAlbumImage;
  const url = song.item.external_urls.spotify;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({
    title,
    artist,
    album,
    url,
    image: albumImage,
    isPlaying,
  });
};
