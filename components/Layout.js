import Head from 'next/head';
import Header from './Header';
import Toolbar from './toolbar/toolbar';

const defaultSiteDescription = 'Jahir Fiquitiva\'s website';

const Layout = ({
  children,
  pageTitle = 'Jahir Fiquitiva 💎',
  description = defaultSiteDescription,
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@600;700&family=Fira+Code:wght@500&display=swap"
          rel="stylesheet"/>
      </Head>
      <Toolbar/>
      <section className={'layout'}>
        <Header/>
        <div className={'content'}>{children}</div>
      </section>
      <footer>
        Built with <img src={'/netliheart.svg'} alt={'Netlify Heart'}/> for you
      </footer>
    </>
  );
};

export default Layout;
