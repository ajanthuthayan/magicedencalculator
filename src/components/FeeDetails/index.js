import React from "react";
import styles from "./FeeDetails.module.css";

function FeeDetails(props) {
  const { royaltyFee, salePrice } = props;

  const transactionFee = 2;
  const totalFee = (salePrice * ((transactionFee + royaltyFee) / 100)).toFixed(
    3
  );
  const payout = (salePrice - totalFee).toFixed(3);

  return (
    <div className={styles[`details-container`]}>
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

export default FeeDetails;
