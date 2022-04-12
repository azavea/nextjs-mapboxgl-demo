import Layout from "../components/Layout";
import Map from "/components/Map";

import "../styles/reset.css";
import "../styles/variables.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Map lat={40} lng={-80} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
