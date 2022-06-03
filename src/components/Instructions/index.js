import { useState } from "react";
import styles from "./Instructions.module.css";

function Instructions(props) {
  const [tooltipText, setTooltipText] = useState("Copy Link");

  const { heading, message, link } = props;

  const copyHandler = (event) => {
    navigator.clipboard.writeText(
      "https://magiceden.io/item-details/CDysFDNCCevjbgg5RhmF6y7y6Qk7hnPYbzDrYwtYkhSJ"
    );
    setTooltipText("Copied Link");
  };

  return (
    <div className={styles.container}>
      {heading && <h3>{heading}</h3>}
      {message && <p>{message}</p>}

      {link && (
        <div
          className={`${styles.tooltip} ${styles.link}`}
          onClick={copyHandler}
          onMouseLeave={() => setTooltipText("Copy Link")}
        >
          {link} <span className={styles.tooltiptext}>{tooltipText}</span>
        </div>
      )}
    </div>
  );
}

export default Instructions;
