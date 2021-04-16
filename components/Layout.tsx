import Head from 'next/head';
import { PageProps } from '@components/types';
import Toolbar from '@components/global/toolbar/toolbar';
import Content from '@components/global/content/content';
import MetaTags from '@components/MetaTags';

const defaultSiteDescription = 'Passionate and creative developer from Colombia '
  + '\uD83C\uDDE8\uD83C\uDDF4.\n'
  + 'This website contains information about me, my skills and my projects.';

const fonts = [
  'inter/inter-v3-latin-regular.woff2',
  'inter/inter-v3-latin-500.woff2',
  'manrope/manrope-v4-latin-500.woff2',
  'manrope/manrope-v4-latin-600.woff2',
  'manrope/manrope-v4-latin-700.woff2',
  'fira-code/fira-code-v10-latin-regular.woff2',
  'fira-code/fira-code-v10-latin-500.woff2',
];

const Layout = ({
  children,
  title = 'Jahir Fiquitiva 💎',
  description = defaultSiteDescription,
  keywords = [],
  image,
  page = -1,
}: PageProps) => {
  return (
    <>
      <MetaTags
        title={title}
        description={description}
        keywords={keywords}
        image={image}/>

      <Head>
        {fonts.map((it, i) => {
          return (
            <link
              rel={'preload'}
              href={`/assets/fonts/${it}`}
              as={'font'}
              crossOrigin={'anonymous'}
              key={`font-${i}`}
            />
          );
        })}
      </Head>

      <header>
        <Toolbar selected={page}/>
      </header>
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
