import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer"]}>
        <small>Created by Ajanth</small>
        <small className={styles.website}>
          <a href="https://www.ajanth.dev">www.ajanth.dev</a>
        </small>
    </footer>
  );
}

export default Footer;
