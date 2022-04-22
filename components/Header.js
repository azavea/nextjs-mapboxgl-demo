import PropTypes from "prop-types";
import styles from "/styles/Header.module.css";
import Icon from "/components/Icon";
import Link from "next/link";

import { useState } from "react";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";

const links = [
  {
    text: "Homepage",
    permalink: "/",
  },
  {
    text: "New York",
    permalink: "/community/new-york/overview/",
  },
  {
    text: "Berkeley",
    permalink: "/community/berkeley/overview/",
  },
  {
    text: "Philadelphia",
    permalink: "/community/philadelphia/overview/",
  },
  {
    text: "Greater Sudsbury",
    permalink: "/community/greater-sudsbury/overview/",
  },
];

const Header = () => {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(links.length);

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link prefetch={false} href={`/`}>
          <a className={styles.brand}>Natural Hazard Risk</a>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.menucontainer}>
          <button
            className={`${styles.button} ${isOpen ? styles.buttonopen : ""}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            {...buttonProps}
          >
            <Icon name="bars" />
          </button>
          <div
            className={`${styles.menu} ${isOpen ? styles.menuopen : ""}`}
            role="menu"
          >
            {links.map((link) => (
              <Link prefetch={false} key={link.permalink} href={link.permalink}>
                <a>{link.text}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
