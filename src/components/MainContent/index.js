import styles from "./MainContent.module.css";

function MainContent(props) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}

export default MainContent;
