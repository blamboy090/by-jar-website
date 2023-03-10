import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from "./nav.module.scss";

const MENU_LIST = [
  { text: "home", href: "/" },
  { text: "books", href: "/books" },
  { text: "newsletter", href: "/newsletter" },
  { text: "contact", href: "/contact" },
  { text: "youtube", href: "https://www.youtube.com/" },
  { text: "ko-fi", href: "https://ko-fi.com/" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  console.log(navActive);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link legacyBehavior href={"/"}>
          <a onClick={() => setActiveIdx(0)}>
            <h1 className="logo">jasmine romero</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menuBar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div
          className={`${styles.nav__menuList} ${
            navActive ? `${styles.active}` : ""
          }`}
        >
          {MENU_LIST.map((menu, idx) => {
            return (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
