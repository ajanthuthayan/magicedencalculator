import styles from "./FloorPrice.module.css";

function FloorPrice(props) {
  const { floorPrice } = props;

  const currentFloorPrice =
    isNaN(floorPrice) || floorPrice !== "" ? floorPrice : "";

  return (
    <p className={styles["floor-price"]}>
      Current Floor Price {currentFloorPrice} ◎
    </p>
  );
}

export default FloorPrice;
