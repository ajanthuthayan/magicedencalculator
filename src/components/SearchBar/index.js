import React from "react";
import styles from "./index.module.css"

function SearchBar() {
  return (
    <div className={styles['search-container']}>
      <input className={styles.input} type="text" placeholder="Enter link to a Solana NFT on MagicEden" />
    </div>
  );
}

export default SearchBar;
