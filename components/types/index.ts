import { ReactElement } from 'react';

export interface PageProps {
  title: string,
  description: string,
  keywords: string[],
  image?: string,
  page?: number,
  children?: ReactElement | ReactElement[]
}
