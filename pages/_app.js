import '@components/global.css';
import ThemeWrapper from '@components/theme/ThemeWrapper';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}
