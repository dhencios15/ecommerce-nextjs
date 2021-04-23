import { AppProps } from 'next/app';
import GlobalStyles from 'styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
