import { SessionProvider, useSession } from "next-auth/react";

import { useRouter } from "next/router";

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
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </StoreProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

function Auth({ children }) {
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unauthorized?message=login required");
    },
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}

export default MyApp;
