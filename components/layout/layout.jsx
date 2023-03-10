import BooksButton from "../books-button/books-button";
import ContactButton from "../contact-button/contact-button";
import HomeButton from "../home-button/home-button";
import NewsletterButton from "../newsletter-button/newsletter-button";
import styles from "./layout.module.scss";
import Link from "next/link";
import Navbar from "../nav/NavBar";

export default function Layout({ children }) {
  return (
    <header>
      <div className={styles.layoutContainer}>
        <Navbar />
      </div>
      <div className={styles.lineBreak}></div>
      {children}
    </header>
  );
}
