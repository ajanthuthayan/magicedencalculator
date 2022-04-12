import React from "react";
import styles from "./Details.module.css";

function Details() {
  return (
    <div className={styles[`details-container`]}>
      <div className={styles["fee-row"]}>
        <h3>Listing Fee</h3>
        <h4>FREE</h4>
      </div>
      <div className={styles["fee-row"]}>
        <h3>Transaction Fee</h3>
        <h4>2%</h4>
      </div>
      <div className={styles["fee-row"]}>
        <h3>Royalty Fee</h3>
        <h4>10%</h4>
      </div>
    </div>
  );
}

export default Details;
