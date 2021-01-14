import { ReactElement } from 'react';

export const nofunc = (_: any) => {};

export interface ComponentWithChildren {
  children?: ReactElement | ReactElement[],
}

export interface PageProps extends ComponentWithChildren {
  title: string,
  description: string,
  keywords: string[],
  image?: string,
  page?: number,
}
