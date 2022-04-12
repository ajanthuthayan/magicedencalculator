import React from "react";
import styles from "./Details.module.css";

function Details() {
  const salePrice = 5;
  const transactionFee = 2;
  const royaltyFee = 10;
  const totalFee = salePrice * ((transactionFee + royaltyFee) / 100);
  const payout = salePrice - totalFee;

  return (
    <div className={styles[`details-container`]}>
      <div className={styles["sell-container"]}>
        <h2>Sale Price</h2>
        <div>
          <input
            className={styles["sell-input"]}
            type="number"
            min={1}
            max={5}
          />
          <p>SOL</p>
        </div>
      </div>

      <div className={styles["fee-row"]}>
        <h3>Listing Fee</h3>
        <h4>FREE</h4>
      </div>
      <div className={styles["fee-row"]}>
        <h3>Transaction Fee</h3>
        <h4>{transactionFee}%</h4>
      </div>
      <div className={styles["fee-row"]}>
        <h3>Royalty Fee</h3>
        <h4>{royaltyFee}%</h4>
      </div>
      <div className={styles["totalfee-row"]}>
        <h3>Total Fees</h3>
        <h4>{totalFee} SOL</h4>
      </div>
      <div className={styles["payout-row"]}>
        <h3>Net Sale</h3>
        <h4>{payout} SOL</h4>
      </div>
    </div>
  );
}

export default Details;
