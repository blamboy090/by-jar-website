import "../styles/globals.css";
import Layout from "../components/layout/layout";
import {Fraunces} from '@next/font/google'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout> 
  );
}

export default MyApp;
