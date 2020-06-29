import Head from 'next/head';
import Toolbar from './global/toolbar/toolbar';
import Content from '@components/global/content/content';

const defaultSiteDescription = 'Jahir Fiquitiva\'s website';

const Layout = ({
  children,
  pageTitle = 'Jahir Fiquitiva 💎',
  description = defaultSiteDescription,
  page = -1,
  ...props
}) => {
  return (
    <>
      <Head>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
        <meta charSet={'utf-8'}/>
        <meta name={'Description'} content={description}></meta>
        <title>{pageTitle}</title>

        <link
          href={'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@500;600;700&family=Fira+Code:wght@500&display=swap'}
          rel={'stylesheet'}/>
        <link
          href={'https://meyerweb.com/eric/tools/css/reset/reset.css'}
          rel={'stylesheet'}/>
        <link
          href={'https://necolas.github.io/normalize.css/latest/normalize.css'}
          rel={'stylesheet'}/>
      </Head>
      <header>
        <Toolbar selected={page}/>
      </header>
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
