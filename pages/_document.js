import Document, { Head, Html, Main, NextScript } from 'next/document';

class ThemedDocument extends Document {
  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html>
        <Head/>
        <body>
          <script src={'/noflash.js'}/>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default ThemedDocument;
