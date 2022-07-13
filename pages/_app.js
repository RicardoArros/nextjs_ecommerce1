import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";

import { lightTheme } from "../styles/theme.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
