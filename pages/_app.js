import { Provider } from "react-redux";
import { useEffect } from "react";

import Header from "/components/Header";
import Footer from "/components/Footer";
import MapContainer from "/components/MapContainer";

import store from "../app/store";

import "../styles/reset.css";
import "../styles/variables.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { lat, lng } = pageProps.community;

  return (
    <Provider store={store}>
      <>
        <Header />
        <MapContainer
          lat={pageProps.lat ? pageProps.lat : lat}
          lng={pageProps.lng ? pageProps.lng : lng}
        />
        <Component {...pageProps} />
        <Footer />
      </>
    </Provider>
  );
}

export default MyApp;
