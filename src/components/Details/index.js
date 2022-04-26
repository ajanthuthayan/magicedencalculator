import React, { useState } from "react";
import styles from "./Details.module.css";

function Details(props) {
  const [salePrice, setSalePrice] = useState("");
  const { royaltyFee } = props;

  const transactionFee = 2;
  const totalFee = (salePrice * ((transactionFee + royaltyFee) / 100)).toFixed(
    3
  );
  const payout = (salePrice - totalFee).toFixed(3);


  const changeSalePrice = (event) => {
    setSalePrice(event.target.value);
  };

  return (
    <div className={styles[`details-container`]}>
      <div className={styles["sell-container"]}>
        <h2>Sale Price</h2>
        <div>
          <input
            className={styles["sell-input"]}
            type="text"
            value={salePrice}
            onChange={changeSalePrice}
            step="any"
            placeholder="0.00"
            maxlength="10"
            pattern="\d{0,10}(?:\.\d{0,10})?$"
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
      {royaltyFee && salePrice && (
        <div className={styles["fee-row"]}>
          <h3>Royalty Fee</h3>
          <h4>{royaltyFee}%</h4>
        </div>
      )}
      {royaltyFee && salePrice && (
        <div className={styles["totalfee-row"]}>
          <h3>Total Fees</h3>
          <h4>{totalFee} SOL</h4>
        </div>
      )}
      {royaltyFee && salePrice && (
        <div className={styles["payout-row"]}>
          <h3>Net Sale</h3>
          <h4>{payout} SOL</h4>
        </div>
      )}
    </div>
  );
}

export default Details;
