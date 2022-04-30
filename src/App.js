import { Fragment, useState } from "react";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import NFTInfo from "./components/NFTInfo";
import FeeDetails from "./components/FeeDetails";
import "./App.css";
import SaleInput from "./components/SaleInput";
import NFTMain from "./components/NFTMain";

function App() {
  const [salePrice, setSalePrice] = useState("");
  const [link, setLink] = useState("");
  const [details, setDetails] = useState({
    name: "",
    royaltyFee: "",
    imageLink: "",
  });

  const onLinkChange = (event) => {
    setLink(event.target.value);
  };

  const onSearch = (event) => {
    fetch("http://localhost:3000/details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ magicEdenLink: link }),
    })
      .then((response) => response.json())
      .then((nftDetails) => {
        setDetails(nftDetails);
      });
  };

  const getSalePrice = (value) => {
    setSalePrice(value);
  };

  return (
    <Fragment>
      <h1>Magic Eden Calculator</h1>
      <SearchBar onLinkChange={onLinkChange} onSearch={onSearch} />
      <MainContent>
        <NFTMain
          imageLink={details.imageLink}
          name={details.name}
          salePrice={getSalePrice}
        />
        <FeeDetails royaltyFee={details.royaltyFee} salePrice={salePrice} />
      </MainContent>
    </Fragment>
  );
}

export default App;
