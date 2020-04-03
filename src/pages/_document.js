import React from 'react';
import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    // noinspection RequiredAttributes,HtmlRequiredTitleElement
    return (
      <Html className={'has-navbar-fixed-top'} lang={'en'}>
        <Head/>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
