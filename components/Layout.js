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

        <link rel={'stylesheet'}
              href={'https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css'}/>
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
