import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { Fraunces } from "@next/font/google";
import Navbar from "../components/nav/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    // <>
    // <Navbar/>
    //   <Component {...pageProps} />
    // </>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
