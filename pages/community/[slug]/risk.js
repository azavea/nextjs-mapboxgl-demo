import Head from "next/head";
import Link from "next/link";

import getCommunities from "/lib/getCommunities";
import matchCommunity from "/lib/matchCommunity";
import Similar from "/components/Similar";
import MapContainer from "/components/MapContainer";

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
      color: "green",
    },
  };
}

export default function Detail({ community, communities }) {
  return (
    <div>
      <Head>
        <title>{community.name} Risk</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.content}>
          <h3>Risk</h3>
          <p className="large">
            For many communities in {community.name}, risk will become more
            common due to human-made climate change or more harmful due to
            changes in building practices.
          </p>
          <p>
            In simple terms, risk is the possibility of something bad happening.
            Risk involves uncertainty about the effects/implications of an
            activity with respect to something that humans value (such as
            health, well-being, wealth, property or the environment), often
            focusing on negative, undesirable consequences. Many different
            definitions have been proposed. The international standard
            definition of risk for common understanding in different
            applications is “effect of uncertainty on objectives”.
          </p>

          <p>
            The understanding of risk, the methods of assessment and management,
            the descriptions of risk and even the definitions of risk differ in
            different practice areas (business, economics, environment, finance,
            information technology, health, insurance, safety, security etc).
            This article provides links to more detailed articles on these
            areas. The international standard for risk management, ISO 31000,
            provides principles and generic guidelines on managing risks faced
            by organizations.
          </p>
          <p>
            Varius morbi enim nunc faucibus. Vivamus arcu felis bibendum ut
            tristique et. Lorem ipsum dolor sit amet consectetur adipiscing elit
            pellentesque habitant. Ante metus dictum at tempor. Habitant morbi
            tristique senectus et netus et. Arcu cursus euismod quis viverra
            nibh cras pulvinar mattis nunc. At consectetur lorem donec massa
            sapien faucibus et. Felis eget nunc lobortis mattis aliquam faucibus
            purus in. Sem et tortor consequat id. Rhoncus aenean vel elit
            scelerisque mauris pellentesque. Quisque non tellus orci ac auctor.
          </p>
          <p>
            Varius morbi enim nunc faucibus. Vivamus arcu felis bibendum ut
            tristique et. Lorem ipsum dolor sit amet consectetur adipiscing elit
            pellentesque habitant. Ante metus dictum at tempor. Habitant morbi
            tristique senectus et netus et. Arcu cursus euismod quis viverra
            nibh cras pulvinar mattis nunc. At consectetur lorem donec massa
            sapien faucibus et. Felis eget nunc lobortis mattis aliquam faucibus
            purus in. Sem et tortor consequat id. Rhoncus aenean vel elit
            scelerisque mauris pellentesque. Quisque non tellus orci ac auctor.
          </p>
          <h3>Similar communities</h3>
          <Similar community={community} communities={communities} />
        </div>
      </div>
    </div>
  );
}

Detail.PageLayout = MapContainer;
