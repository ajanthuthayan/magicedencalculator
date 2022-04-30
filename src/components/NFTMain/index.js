import NFTInfo from "../NFTInfo";
import SaleInput from "../SaleInput";

function NFTMain(props) {
  const { imageLink, name, salePrice } = props;
  return (
    <div>
      <NFTInfo imageLink={imageLink} name={name} />
      <SaleInput salePrice={salePrice} />
    </div>
  );
}

export default NFTMain;
