import React from 'react';
import '@mdi/font/css/materialdesignicons.min.css';
import '../styles/base/all.scss';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
