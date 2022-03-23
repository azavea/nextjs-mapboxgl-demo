import Airtable from "airtable";
import Head from "next/head";
import Link from "next/link";

import Map from "/components/Map"
import styles from "/styles/Index.module.css";

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  });

  const records = await airtable
    .base("appi2zZaHEKWDWKt6")("Communities")
    .select({
      fields: ["name", "lat", "lng"],
    })
    .all();

  const communities = records.map((product) => {
    return {
      name: product.get("name"),
      lat: product.get("lat"),
      lng: product.get("lng"),
    };
  });


  return {
    props: {
      communities,
    },
  };
}

export default function Home({communities}) {
  return (
    <>
      <Head>
        <title>
          Our app
        </title>
        <meta
          name="description"
          content="Current and forecasted landslide risk for Sitka, Alaska."
        />
      </Head>
      <div>{communities.map(community=><div>{community.name}</div>)}</div>
    </>
  );
}
