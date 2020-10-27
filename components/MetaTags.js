import Head from 'next/head';

const defaultImage = 'https://jahir.dev/assets/images/brand/banner.png';

const MetaTags = ({ title, description, keywords, image }) => {
  const actualImage = image ? image.length > 0 ? image : defaultImage : defaultImage;
  return (
    <Head>
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

      <link href={'https://plus.google.com/+JahirFiquitivaR/'} rel={'publisher'}/>
      <meta name={'google-site-verification'}
            content={'lJwL3cKpjX_Eqp6yEY4hsydJazQl85xv29ZUmEg4oEE'}/>

      <meta name={'theme-color'} content={'#ebf0fb'}/>
      <meta name={'msapplication-TileColor'} content={'#ebf0fb'}/>
      <meta name={'msapplication-navbutton-color'} content={'#ebf0fb'}/>
      <meta name={'apple-mobile-web-app-status-bar-style'} content={'#ebf0fb'}/>

      <link rel={'shortcut icon'} href={'/assets/images/brand/favicon32.png'}/>
      <link rel={'apple-touch-icon'} href={'/assets/images/brand/favicon57.png'}/>
      <link rel={'apple-touch-icon'} sizes={'72x72'} href={'/assets/images/brand/favicon72.png'}/>
      <link rel={'apple-touch-icon'} sizes={'114x114'}
            href={'/assets/images/brand/favicon114.png'}/>
      <link rel={'apple-touch-icon-precomposed'} href={'/assets/images/brand/favicon32.png'}/>
      <link rel={'icon'} sizes={'32x32'} href={'/assets/images/brand/favicon32.png'}/>
      <meta name={'msapplication-TileImage'} content={'/assets/images/brand/favicon32.png'}/>
    </Head>
  );
};

export default MetaTags;
