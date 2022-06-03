import React from "react";
import styles from "./index.module.css";

function SearchBar(props) {
  const { onLinkChange, onSearch, disabled } = props;

  return (
    <div className={styles["search-container"]}>
      <input
        className={styles.input}
        type="url"
        placeholder="https://magiceden.io/item-details/tokenAddress"
        pattern="https://magiceden.io/item-details/*"
        onChange={onLinkChange}
      />
      <button onClick={onSearch} disabled={disabled}>Enter</button>
    </div>
  );
}

export default SearchBar;
