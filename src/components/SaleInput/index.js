import { useState } from "react";
import styles from "./SaleInput.module.css";

function SaleInput(props) {
  const [salePrice, setSalePrice] = useState("");

  const changeSalePrice = (event) => {
    setSalePrice(event.target.value);
    props.salePrice(event.target.value);
  };

  return (
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
  );
}

export default SaleInput;
