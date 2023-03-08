import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jasmine Romero</title>
        <meta name="description" content="Author Jasmine Romero's website" />
        <meta name="viewport" content="width=device-width, inital-scale=1.0" />
        <link rel="icon" href="/jr-logo.png" />
      </Head>

      <main className={styles.homePage}>
        <header className={styles.header}>
          <Image
            src="/jr-logo.png"
            alt="jasmine romero logo"
            width={207}
            height={207}
          ></Image>
          <h1 className={styles.text}>jasmine romero</h1>
        </header>
        <article>
          <div className={styles.content}>
            <p className={styles.aboutMe}>
              Jasmine Romero writes stories about finding magic in the cracks
              and in-between places of our world - and ourselves.
              <br />
              <br />
              Originally from SoCal, she uprooted to Colorado to get lost in the
              woods. Her love of writing stemmed from a very unhappy fairy tale
              that she decided to rewrite on her grandmother's old typewriter.
              She received her BA in English and Comparative Literature, with a
              minor in Art from California State University Fullerton, and works
              an office job to pay for snacks (and probably rent). When she
              isn't flipping through a book, you can find her playing video
              games, doodling, watching anime, or writing about weird magic and
              the messiness of being human.
              <br />
              <br />
              If you'd like to join her for a write-in, she streams writing
              sessions on YouTube.
            </p>
            <Image
              src="/IMG_8730.jpg"
              width={329}
              height={440}
              className={styles.portrait}
              alt="jasmine"
            ></Image>
          </div>
          <div className={styles.botImages}>
            <Image
              src="/Tree.png"
              width={314}
              height={246}
              className={styles.tree}
            ></Image>
            <Image
              src="/Door.png"
              width={361}
              height={155}
              className={styles.door}
            ></Image>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Home;
