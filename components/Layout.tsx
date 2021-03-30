import { GoogleFonts } from 'next-google-fonts';
import { PageProps } from '@components/types';
import Toolbar from '@components/global/toolbar/toolbar';
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
}: PageProps) => {
  return (
    <>
      <MetaTags
        title={title}
        description={description}
        keywords={keywords}
        image={image}/>
      <GoogleFonts
        href={'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@500;600;700&display=swap'}/>
      <header>
        <Toolbar selected={page}/>
      </header>
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
