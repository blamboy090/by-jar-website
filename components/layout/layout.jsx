import Header from "../header/header";
import Footer from "../footer/footer";
import NavBar from "../navbar/navBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
