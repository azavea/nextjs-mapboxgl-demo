export default function matchCommunity(slug, communities) {
  return communities.find((community) => community.slug === slug);
}
