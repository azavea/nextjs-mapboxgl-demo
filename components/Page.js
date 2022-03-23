import Link from "next/link";
import Head from "next/head";
import { withRouter, useRouter } from "next/router";

import styles from "../styles/Page.module.css";

const Page = ({ children, title, slug }) => {
  const router = useRouter();
  const currentPath = router.route.split("/").slice(-1)[0];

  return (
    <div>
      <header className={styles.header}>
        <h2>
          <span className={styles.title}>{title}</span>
        </h2>
        <nav>
          <ul>
            <li>
              <Link href={`/community/${slug}/overview`}>
                <a className={currentPath === "overview" ? styles.active : ""}>
                  Overview
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/community/${slug}/hazard`}>
                <a className={currentPath === "hazard" ? styles.active : ""}>
                  Hazard
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <article className={styles.article}>{children}</article>
    </div>
  );
};

export default Page;
