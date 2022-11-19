import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <a className={styles.navElement}>home</a>
      <a className={styles.navElement}>books</a>
      <a className={styles.navElement}>contact</a>
      <a className={styles.navElement}>youtube</a>
      <a className={styles.navElement}>ko-fi</a>
    </nav>
  );
};
export default Header;
