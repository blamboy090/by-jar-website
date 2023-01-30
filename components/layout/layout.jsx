import BooksButton from "../books-button/books-button";
import ContactButton from "../contact-button/contact-button";
import HomeButton from "../home-button/home-button";
import NewsletterButton from "../newsletter-button/newsletter-button";
import styles from "./layout.module.scss";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <header>
      <div className={styles.layoutContainer}>
        <HomeButton />
        <BooksButton />
        <NewsletterButton />
        <ContactButton />
        <Link href="https://www.youtube.com/">youtube</Link>
        <Link href="https://ko-fi.com/">ko-fi</Link>
      </div>
      {children}
    </header>
  );
}
