import { AppProps } from 'next/app'

import GlobalStyles from '../../styles/GlobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap" rel="stylesheet"></link>

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />

    </>
  );
}

export default MyApp
