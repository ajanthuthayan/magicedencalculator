import React from "react";
import styles from "./NFTImage.module.css";

function NFTImage(props) {
  // If no link is entered <-- This would be the initial way too

  const { imageLink } = props;

  if (!imageLink) {
    return (
      <div className={styles["image-container1"]}>
        <h3>NFT Image</h3>
      </div>
    );
  } else {
    return (
      <div className={styles["image-container2"]}>
        <img src={imageLink} alt="NFT" />;
      </div>
    );
  }
}

export default NFTImage;
