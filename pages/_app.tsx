import { AppProps } from 'next/app';

import { FormspreeProvider } from '@formspree/react';
import ThemeWrapper from '@components/theme/ThemeWrapper';
import '@components/global/styles/resetalize.min.css';
import '@components/global/styles/global.css';

// noinspection JSUnusedGlobalSymbols
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormspreeProvider project={'1552841918776344307'}>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </FormspreeProvider>
  );
}
