import type { AppProps } from "next/app";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";
import { Provider } from "react-redux";
import store, { persistor } from "../redux/store";
import GlobalStyle from "../styles/globalstyles";
import { gradientBg } from "../styles/sharedstyles";
import type { Page } from "../../types/page";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "@apollo/client";
import client from "../services/client/apollo-client";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

const Container = styled.div`
  ${gradientBg}
`;

type Props = AppProps<{ session: Session }> & {
  Component: Page;
};

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ApolloProvider client={client}>
              <SessionProvider session={pageProps.session}>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
                {/* Same as */}
                <ToastContainer />
                <Component {...pageProps} />
              </SessionProvider>
            </ApolloProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}
