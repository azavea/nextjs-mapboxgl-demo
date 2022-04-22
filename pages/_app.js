import Header from "/components/Header";
import Footer from "/components/Footer";

import "../styles/reset.css";
import "../styles/variables.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
