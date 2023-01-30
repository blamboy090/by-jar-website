import Link from "next/link";
import { useRouter } from "next/router";

const BooksButton = () => {
  const router = useRouter();

  return <Link href="/books">books</Link>;
};
export default BooksButton;