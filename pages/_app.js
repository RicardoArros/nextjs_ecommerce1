import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";

import { lightTheme } from "../styles/theme.config";

import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
