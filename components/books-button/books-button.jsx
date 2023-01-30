import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./books-button.module.scss";
const BooksButton = () => {
  const router = useRouter();

  return (
    <div className={styles.buttonContainer}>
      <Link href="/books" className={styles.text}>
        books
      </Link>
    </div>
  );
};
export default BooksButton;
