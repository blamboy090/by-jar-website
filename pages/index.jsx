import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jasmine Romero</title>
        <meta name="description" content="Author Jasmine Romero's website" />
        <link rel="icon" href="/jr-logo.png" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <Image
            src="/jr-logo.png"
            alt="jasmine romero logo"
            width={207}
            height={207}
          ></Image>
          <h1 className={styles.text}>jasmine romero</h1>
        </header>
        <div className={styles.content}>
          <p className={styles.aboutMe}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <Image
            src="/Abu.webp"
            width={329}
            height={440}
            className={styles.portrait}
          ></Image>
        </div>
      </main>
    </div>
  );
};

export default Home;
