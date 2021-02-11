import { useContext, useEffect, useMemo, useState } from 'react';
import NextHead from 'next/head';
import { PageProps } from '@components/types';
import ThemeContext from '@components/theme/ThemeContext';

const defaultImage = 'https://jahir.dev/assets/images/brand/banner.png';

const MetaTags = ({ title, description, keywords, image }: PageProps) => {
  const { isDark = false } = useContext(ThemeContext);
  const [siteColor, setSiteColor] = useState('#ebf0fb');
  const [actualImage, setActualImage] = useState('');

  useEffect(() => {
    setActualImage(image
                   ? image.length > 0 ? image : defaultImage
                   : defaultImage);
  }, [image]);

  useMemo(() => {
    setSiteColor(isDark ? '#080f1e' : '#ebf0fb');
  }, [isDark]);

  return (
    <NextHead>
      <meta charSet={'UTF-8'}/>
      <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'}/>
      <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'}/>

      <title>{title}</title>

      <meta name={'description'} content={description}/>
      <meta name={'author'} content={'Jahir Fiquitiva'}/>
      <meta name={'keywords'} content={(keywords || []).join(', ')}/>
      <meta property={'og:title'} content={title}/>
      <meta property={'og:site_name'} content={title}/>

      <meta itemProp={'name'} content={title}/>
      <meta itemProp={'description'} content={description}/>
      <meta itemProp={'image'} content={actualImage}/>

      <meta property={'og:title'} content={title}/>
      <meta property={'og:type'} content={'portfolio'}/>
      <meta property={'og:url'} content={'https://jahir.dev'}/>
      <meta property={'og:image'} content={actualImage}/>
      <meta property={'og:description'} content={description}/>
      <meta property={'og:site_name'} content={title}/>
      <meta property={'og:locale'} content={'en_US'}/>
      <link rel={'canonical'} href={'https://jahir.dev'}/>

      <meta name={'twitter:card'} content={'summary'}/>
      <meta name={'twitter:creator'} content={'@jahirfiquitiva'}/>
      <meta name={'twitter:site'} content={'@jahirfiquitiva'}/>
      <meta name={'twitter:title'} content={title}/>
      <meta name={'twitter:description'} content={description}/>
      <meta name={'twitter:image:src'}
            content={'https://jahir.dev/assets/images/brand/logo-full-me.png'}/>

      <link href={'https://plus.google.com/+JahirFiquitivaR/'}
            rel={'publisher'}/>
      <meta name={'google-site-verification'}
            content={'lJwL3cKpjX_Eqp6yEY4hsydJazQl85xv29ZUmEg4oEE'}/>

      <meta name={'theme-color'} content={siteColor}/>
      <meta name={'msapplication-TileColor'} content={siteColor}/>
      <meta name={'msapplication-navbutton-color'} content={siteColor}/>
      <meta name={'apple-mobile-web-app-status-bar-style'} content={siteColor}/>

      <link
        rel={'shortcut icon'}
        href={'/assets/images/brand/favicon32.png'}/>
      <link
        rel={'apple-touch-icon'}
        href={'/assets/images/brand/favicon57.png'}/>
      <link
        rel={'apple-touch-icon'}
        sizes={'72x72'}
        href={'/assets/images/brand/favicon72.png'}/>
      <link
        rel={'apple-touch-icon'}
        sizes={'114x114'}
        href={'/assets/images/brand/favicon114.png'}/>
      <link
        rel={'apple-touch-icon-precomposed'}
        href={'/assets/images/brand/favicon32.png'}/>
      <link
        rel={'icon'} sizes={'32x32'}
        href={'/assets/images/brand/favicon32.png'}/>
      <meta
        name={'msapplication-TileImage'}
        content={'/assets/images/brand/favicon32.png'}/>
    </NextHead>
  );
};

export default MetaTags;
