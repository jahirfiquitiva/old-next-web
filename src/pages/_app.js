import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '@mdi/font/css/materialdesignicons.min.css';
import '../styles/base/all.scss';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Jahir Fiquitiva 💎</title>
          <meta name={'viewport'} content={'initial-scale=1.0, width=device-width'}/>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
