// Fetch data from Airtable API https://airtable.com/shrdonDjhW7wFWNXO

export default function matchCommunity(slug, communities) {
  return communities.find((community) => community.slug === slug);
}
