import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./home-button.module.scss";

const HomeButton = () => {
  const router = useRouter();

  return (
    <div className={styles.buttonContainer}>
      <Link href="/" className={styles.text}>
        home
      </Link>
    </div>
  );
};
export default HomeButton;
