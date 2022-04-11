import Airtable from "airtable";

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
});

export default async function getCommunities() {
  const records = await airtable
    .base("appi2zZaHEKWDWKt6")("Communities")
    .select({
      fields: ["name", "lat", "lng", "slug"],
    })
    .all();

  const communities = records.map((product) => {
    return {
      name: product.get("name"),
      lat: product.get("lat"),
      lng: product.get("lng"),
      slug: product.get("slug"),
    };
  });

  return communities;
}
