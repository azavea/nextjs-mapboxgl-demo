import Head from "next/head";
import Link from "next/link";

import getCommunities from "/lib/getCommunities";
import matchCommunity from "/lib/matchCommunity";
import Page from "/components/Page";
import Similar from "/components/Similar";
import MapActions from "/components/MapActions";

import styles from "/styles/App.module.css";

import { useAppSelector, useAppDispatch } from "/app/hooks";
import {
  decrement,
  increment,
  setPage,
  selectCount,
  selectPage,
} from "/app/counterSlice";

export async function getStaticPaths() {
  const communities = await getCommunities();

  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const communities = await getCommunities();
  const community = matchCommunity(params.slug, communities);

  return {
    props: {
      community,
      communities,
    },
  };
}

export default function Detail({ community, communities }) {
  return (
    <Page title={community.name} slug={community.slug}>
      <Head>
        <title>{community.name} Overview</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.app}>
        <div className={styles.content}>
          <h3>Third page ... yeah, yeah!</h3>

          <MapActions />

          <p className="large">
            {community.name} has a hazard risk of {community.risk} of 3—in the
            top {community.rank}% of communities in {community.country}.
          </p>
          <p>
            {community.name} is a community in {community.country} with a
            population of {community.population}. Like many of its neighbors, it
            will face an increase in hazard risk over the coming century.
            Climate mitigation efforts, such as science, will be able to help
            the community plan for and adapt to its future. In real time.
          </p>
          <h3>Similar communities</h3>
          <Similar community={community} communities={communities} />
        </div>
      </div>
    </Page>
  );
}

Detail.isApp = true;
