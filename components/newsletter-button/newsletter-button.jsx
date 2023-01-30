import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./newsletter-button.module.scss";

const NewsletterButton = () => {
  const router = useRouter();

  return (
    <div className={styles.buttonContainer}>
      <Link href="/newsletter" className={styles.text}>
        newsletter
      </Link>
    </div>
  );
};
export default NewsletterButton;
