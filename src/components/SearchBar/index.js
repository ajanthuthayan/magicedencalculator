import React, { useState } from "react";
import styles from "./index.module.css";

function SearchBar(props) {
  const { onLinkChange, onSearch } = props;

  return (
    <div className={styles["search-container"]}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter link to a Solana NFT on MagicEden"
        onChange={onLinkChange}
      />
      <button onClick={onSearch}>Enter</button>
    </div>
  );
}

export default SearchBar;
