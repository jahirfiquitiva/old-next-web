import { AppProps } from 'next/app';
import ThemeWrapper from '@components/theme/ThemeWrapper';
import '@components/global/styles/resetalize.min.css';
import '@components/global/styles/global.css';

// noinspection JSUnusedGlobalSymbols
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}
