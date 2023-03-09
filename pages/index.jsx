import Head from "next/head";
import styles from "../styles/Home.module.css";
import AboutMe from "./about-me";


//refactor main page to create a better HTML flow
const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jasmine Romero</title>
        <meta name="description" content="Author Jasmine Romero's website" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <link rel="icon" href="/jr-logo.png" />
      </Head>
      <AboutMe/>
    
    </div>
  );
};

export default Home;
