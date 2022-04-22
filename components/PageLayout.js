import styles from "/styles/Page.module.css";

import Header from "/components/Header";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default PageLayout;
