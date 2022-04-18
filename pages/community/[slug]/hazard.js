import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

import Page from "/components/Page";
import Similar from "/components/Similar";
import getCommunities from "/lib/getCommunities";
import matchCommunity from "/lib/matchCommunity";
import styles from "/styles/App.module.css";

export async function getStaticPaths() {
  const communities = await getCommunities();

  return {
    paths: communities.map((community) => {
      return {
        params: community,
      };
    }),
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
      lat: 45,
      lng: -80,
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
          <h3>Hazard</h3>
          <p className="large">
            {community.name} will see increased hazards in the future—in
            addition to risk that it will also experience. Did we mention hazard
            and risk are different?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            venenatis ligula aliquam magna elementum, in dapibus nisl pulvinar.
            In venenatis rutrum nisl, at rhoncus risus varius sit amet. Ut ut
            eros eros. Vivamus tincidunt quam urna, ut malesuada eros viverra
            sit amet. Nam est urna, ultricies id mauris sit amet, sodales
            fringilla ante. Ut nunc nulla, convallis eu nisl in, pulvinar cursus
            augue. Nullam dictum, metus ac suscipit aliquet, mi erat commodo
            velit, non interdum eros magna vel ligula.
          </p>
          <h3>Similar communities</h3>
          <Similar community={community} communities={communities} />
        </div>
      </div>
    </Page>
  );
}

Detail.isApp = true;
