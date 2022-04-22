import Head from "next/head";
import Link from "next/link";

import PageLayout from "/components/PageLayout";
import Similar from "/components/Similar";
import styles from "/styles/Home.module.css";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Natural Hazard Risk</title>
        <meta
          name="description"
          content="Learn about your community’s hazard risk in real-time"
        />
      </Head>
      <div className={styles.content}>
        <h1>What’s your hazard risk?</h1>
        <p className={styles.description}>
          Due to changes, many communities experience significant hazard risk.
          Find out where you are most vulnerable and what you can do about it.
        </p>
        <input
          type="search"
          placeholder="This doesn’t work, click a link below"
        />
        <div className={styles.example}>
          e.g.{" "}
          <Link prefetch={false} href="/community/new-york/overview">
            <a>New York</a>
          </Link>
          ,{" "}
          <Link prefetch={false} href="/community/berkeley/overview">
            <a>Berkeley</a>
          </Link>
          ,{" "}
          <Link prefetch={false} href="/community/greater-sudbury/overview">
            <a>Greater Sudbury</a>
          </Link>
        </div>
      </div>
    </>
  );
}

Home.PageLayout = PageLayout;
