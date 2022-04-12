import React from "react";
import styles from "./NFTImage.module.css";

function NFTImage() {
  // If no link is entered <-- This would be the initial way too
  if (true) {
    return <div className={styles["image-container"]}><h3>NFT Image</h3></div>;
  } else {
    return;
  }
}

export default NFTImage;
