import React from "react";
import styles from "./index.module.css";

function SearchBar(props) {
  const { onLinkChange, onSearch } = props;

  return (
    <div className={styles["search-container"]}>
      <input
        className={styles.input}
        type="url"
        placeholder="Enter link to a Solana NFT on MagicEden"
        pattern="https://.*"
        onChange={onLinkChange}
      />
      <button onClick={onSearch}>Enter</button>
    </div>
  );
}

export default SearchBar;
