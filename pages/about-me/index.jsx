import styles from "./about-me.module.scss";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
        <h1>About Page</h1>
      {/* <main className={styles.container}>
        <header className={styles.header}>
          <img
            src="/jr-logo.png"
            alt="jasmine romero logo"
            className={styles.logo}
          />
          <h1 className={styles.name}>jasmine romero</h1>
        </header>
        <article className={styles.content}>
          <p>
            Jasmine Romero writes stories about finding magic in the cracks and
            in-between places of our world - and ourselves.
            <br />
            <br />
            Originally from SoCal, she uprooted to Colorado to get lost in the
            woods. Her love of writing stemmed from a very unhappy fairy tale
            that she decided to rewrite on her grandmother's old typewriter. She
            received her BA in English and Comparative Literature, with a minor
            in Art from California State University Fullerton, and works an
            office job to pay for snacks (and probably rent). When she isn't
            flipping through a book, you can find her playing video games,
            doodling, watching anime, or writing about weird magic and the
            messiness of being human.
            <br />
            <br />
            If you'd like to join her for a write-in, she streams writing
            sessions on YouTube.
          </p>
          <div className={styles.portraitContainer}>
            <img
              src="/IMG_8730.jpg"
              width={658}             
              alt="Picture of the author"
              className={styles.portrait}
            />
          </div>
        </article>
      </main> */}
      {/* <main className={styles.homePage}>
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
              <Image
                src="/IMG_8730.jpg"
                width={329}
                height={440}
                className={styles.portrait}
                alt="Picture of the author"
              ></Image>
            </p>
          </div>
        </article>
        <img
          src="/tree_door.png"
          width={100}
          className={styles.tree}
        />
      </main>
      <footer className={styles.footer}>
        <p>FOOT</p>
      </footer> */}
    </div>
  );
};

export default AboutMe;
