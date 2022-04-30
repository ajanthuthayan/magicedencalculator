import React from "react";
import styles from "./NFTInfo.module.css";

function NFTInfo(props) {
  const { imageLink, name } = props;

  if (!imageLink) {
    return (<div className={styles["image-container1"]}>
        <h3>NFT Image</h3>
      </div>);
  } else {
    return (
      <div className={styles["image-container2"]}>
        <h2>{name}</h2>
        <img src={imageLink} alt="NFT" />
      </div>
    );
  }
}

export default NFTInfo;
