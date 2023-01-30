import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jasmine Romero</title>
        <meta name="description" content="Author Jasmine Romero's website" />        
        <link rel="icon" href="/jr-logo.png" />        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.text}>Coming soon...</h1>
        {/* <h1 className={styles.title}>
          <Image
            src="/jr-logo.png"
            alt="Vercel Logo"
            width={207}
            height={207}
          />
          Jasmine Romero
        </h1>

        <p className={styles.description}>
          Here are my <a href="https://linktr.ee/byjasmineromero">socials!</a>
        </p>
        <Image src="/IMG_8730.jpg" alt="Vercel Logo" width={329} height={440} />

        <div className={styles.grid}>
          <Image src="/Tree.png" alt="Vercel Logo" width={314} height={246} />

          <Image src="/Door.png" alt="Vercel Logo" width={361} height={155} />
        </div> */}
      </main>
    </div>
  );
};

export default Home;
