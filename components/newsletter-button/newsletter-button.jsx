import Link from "next/link";
import { useRouter } from "next/router";

const NewsletterButton = () => {
  const router = useRouter();

  return <Link href="/newsletter">newsletter</Link>;
};
export default NewsletterButton;