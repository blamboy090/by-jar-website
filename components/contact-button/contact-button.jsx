import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./contact-button.module.scss";

const ContactButton = () => {
  const router = useRouter();

  return (
    <div className={styles.buttonContainer}>
      <Link href="/contact" className={styles.text}>
        contact
      </Link>
    </div>
  );
};
export default ContactButton;
