import Head from 'next/head';
import Toolbar from './global/toolbar/toolbar';
import Content from '@components/global/content/content';
import MetaTags from '@components/MetaTags';

const defaultSiteDescription = 'Passionate and creative developer from Colombia '
  + '\uD83C\uDDE8\uD83C\uDDF4.\n'
  + 'This website contains information about me, my skills and my projects.';

const Layout = ({
  children,
  title = 'Jahir Fiquitiva 💎',
  description = defaultSiteDescription,
  keywords = [],
  image,
  page = -1,
  ...props
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <MetaTags title={title} description={description} keywords={keywords} image={image}/>
        <link
          rel={'stylesheet'} media={'print'} onLoad={'this.media=\'all\''}
          href={'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@500;600;700&display=swap'}/>
      </Head>
      <header>
        <Toolbar selected={page}/>
      </header>
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
