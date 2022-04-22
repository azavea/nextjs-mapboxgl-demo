import PropTypes from "prop-types";

const Similar = ({ communities, community }) => {
  return (
    <ul>
      {communities.map((community) => (
        <li key={community.slug}>
          <a href={`/community/${community.slug}/overview`}>{community.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Similar;

Similar.propTypes = {
  communities: PropTypes.array.isRequired,
};
