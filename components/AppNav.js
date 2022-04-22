import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { withRouter, useRouter } from "next/router";

import styles from "/styles/App.module.css";

const AppNav = ({ name, slug }) => {
  const router = useRouter();
  const currentPath = router.route.split("/").slice(-1)[0];
  console.log(currentPath === "overview", slug);
  return (
    <header className={styles.header}>
      <h2>
        <span className={styles.title}>{name}</span>
      </h2>
      <nav>
        <ul>
          <li>
            <Link prefetch={false} href={`/community/${slug}/overview`}>
              <a className={currentPath === "overview" ? styles.active : "hi"}>
                Overview
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch={false} href={`/community/${slug}/hazard`}>
              <a className={currentPath === "hazard" ? styles.active : ""}>
                Hazard
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch={false} href={`/community/${slug}/risk`}>
              <a className={currentPath === "risk" ? styles.active : ""}>
                Risk
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppNav;
