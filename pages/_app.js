import { StaticKitProvider } from '@statickit/react';
import ThemeWrapper from '@components/theme/ThemeWrapper';
import '@components/global/styles/resetalize.min.css';
import '@components/global/styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <StaticKitProvider site={'6cd1f416f54e'}>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </StaticKitProvider>
  );
}
