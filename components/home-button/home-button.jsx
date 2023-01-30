import Link from "next/link";
import { useRouter } from "next/router";

const HomeButton = () => {
  const router = useRouter();

  return <Link href="/">home</Link>;
};
export default HomeButton;
