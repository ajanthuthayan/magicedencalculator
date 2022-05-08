import NFTImage from "../NFTImage";
import FloorPrice from "../FloorPrice";
import SaleInput from "../SaleInput";

function NFTMain(props) {
  const { imageLink, name, salePrice, floorPrice } = props;
  return (
    <div>
      <NFTImage imageLink={imageLink} name={name} />
      <FloorPrice floorPrice={floorPrice}/>
      <SaleInput salePrice={salePrice} />
    </div>
  );
}

export default NFTMain;
