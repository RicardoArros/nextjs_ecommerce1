import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";

import { lightTheme } from "../styles/theme.config";
import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
