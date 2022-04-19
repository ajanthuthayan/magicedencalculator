import { Fragment, useState } from "react";
import SearchBar from "./components/SearchBar";
import NFTImage from "./components/NFTImage";
import Details from "./components/Details";
import "./App.css";

function App() {
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

  return (
    <Fragment>
      <h1>Magic Eden Calculator</h1>
      <SearchBar onLinkChange={onLinkChange} onSearch={onSearch} />
      <NFTImage imageLink={details.imageLink} />
      <Details name={details.name} royaltyFee={details.royaltyFee} />
    </Fragment>
  );
}

export default App;
