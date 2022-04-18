import { Provider } from "react-redux";
import { useEffect } from "react";

import Header from "/components/Header";
import Footer from "/components/Footer";

import store from "../app/store";

import "../styles/reset.css";
import "../styles/variables.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Header />
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
        <Footer />
      </>
    </Provider>
  );
}

export default MyApp;
