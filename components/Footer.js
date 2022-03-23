import PropTypes from "prop-types";
import styles from "/styles/Footer.module.css";

const data = {
  links: [
    {
      permalink: "/about/",
      text: "About",
    },
    {
      permalink: "/contact/",
      text: "Contact",
    },
    {
      permalink: "/disclaimer/",
      text: "Disclaimer",
    },
  ],
};

const links = data.links.map((link, i) => (
  <a href={link.permalink} key={i} className={styles.link}>
    <div className={styles.linktext}>{link.text}</div>
  </a>
));

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>{links}</div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
