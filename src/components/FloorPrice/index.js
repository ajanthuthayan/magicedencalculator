function FloorPrice(props) {
  const { floorPrice } = props;

  const currentFloorPrice =
    isNaN(floorPrice) || floorPrice !== "" ? floorPrice : "";

  return <p style={{color: "white", textAlign: "center"}}>Current Floor Price {currentFloorPrice} ◎</p>;
}

export default FloorPrice;
