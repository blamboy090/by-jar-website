import Link from "next/link";
import React from "react";
import styles from "./nav.module.scss";

const NavItem = ({ text, href, active }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className={`${styles.nav__link} ${active ? `${styles.active}` : ""}`}>
        {text}
      </a>
    </Link>
  );
};
export default NavItem;
