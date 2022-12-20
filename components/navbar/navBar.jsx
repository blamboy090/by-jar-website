import Link from "next/link";
import styles from './navBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className="logo"></div>
      <Link href="/">home</Link>
      <Link href="/books">books</Link>
      <Link href="/contact">contact</Link>
      <Link href="/need da link">youtube</Link>
      <Link href="/need da link">ko-fi</Link>
    </nav>
  );
};

export default NavBar;
