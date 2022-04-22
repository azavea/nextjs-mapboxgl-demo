import Head from "next/head";
import { useState, useEffect } from "react";

import Similar from "/components/Similar";
import MapContainer from "/components/MapContainer";

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
      color: "red",
    },
  };
}

export default function Detail({ community, communities }) {
  return (
    <div>
      <Head>
        <title>{community.name} Hazard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.content}>
          <h3>Hazard</h3>
          <p className="large">
            {community.name} will see increased hazards in the future—in
            addition to risk that it will also experience. Did we mention hazard
            and risk are different?
          </p>
          <p>
            A hazard is a potential source of harm. Substances, events, or
            circumstances can constitute hazards when their nature would allow
            them, even just theoretically, to cause damage to health, life,
            property, or any other interest of value. The probability of that
            harm being realized in a specific incident, combined with the
            magnitude of potential harm, make up its risk, a term often used
            synonymously in colloquial speech.
          </p>
          <p>
            Hazards can be classified in several ways; they can be classified as
            natural, anthropogenic, technological, or any combination, such as
            in the case of the natural phenomenon of wildfire becoming more
            common due to human-made climate change or more harmful due to
            changes in building practices. A common theme across many forms of
            hazards in the presence of stored energy that, when released, can
            cause damage. The stored energy can occur in many forms: chemical,
            mechanical, thermal, radioactive, electrical, etc. Situations can
            also be hazardous, for example, confined or limited egress spaces,
            oxygen-depleted atmospheres, awkward positions, repetitive motions,
            low-hanging or protruding objects, etc. They may also be classified
            as health or safety hazards and by the populations that may be
            affected and the severity of the associated risk. In most cases, a
            hazard may affect a range of targets and have little or no effect on
            others.
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
    </div>
  );
}

Detail.PageLayout = MapContainer;
