import Link from "next/link";
import { useRouter } from "next/router";

const ContactButton = () => {
  const router = useRouter();

  return <Link href="/contact">contact</Link>;
};
export default ContactButton;
