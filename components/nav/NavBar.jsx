import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from "./nav.module.scss";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Books", href: "/books" },
  { text: "Newsletter", href: "/newsletter" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <header>
      <nav className={styles.nav}>
        <Link legacyBehavior href={"/"}>
          <a>
            <h1 className="logo">LOGO</h1>
          </a>
        </Link>
        <div
          onclick={() => setNavActive(!navActive)}
          className={styles.nav__menuBar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`${navActive ? "active" : ""} {styles.nav__menuList}`}>
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
