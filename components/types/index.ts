import { ReactElement } from 'react';

export const nofunc = (_: any) => {};

export interface Component extends ReactElement {
  className?: string,
}

export interface ComponentWithChildren {
  children?: Component | Component[],
}

export interface PageProps extends ComponentWithChildren {
  title?: string,
  description?: string,
  keywords?: string[],
  image?: string,
  page?: number,
}

export interface BaseRepoData {
  user?: string,
  name?: string,
  updateWiki?: boolean,
  translate?: boolean
}

export interface ExtendedRepoData extends BaseRepoData {
  url?: string,
  dateStamp?: any,
  date?: string,
  version?: string,
  changelog?: string,
  wiki?: string,
  translateLink?: string,
}

export interface FullRepoData extends ExtendedRepoData {
  changelog?: string,
  download?: string,
}

export interface TopTrackData {
  title?: string,
  artist?: string,
  album?: string,
  url?: string,
  image?: {
    height?: number,
    width?: number,
    url?: string,
  },
}

export interface TrackData extends TopTrackData {
  isPlaying?: boolean,
}

export interface BaseInspoItem {
  link: string;
  title: string;
  description?: string;
}

export interface InspoItem extends BaseInspoItem {
  favicon?: string;
}
