import { Fragment, useState } from "react";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import NFTMain from "./components/NFTMain";
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
      <MainContent>
        <NFTMain imageLink={details.imageLink} name={details.name} />
        <Details royaltyFee={details.royaltyFee} />
      </MainContent>
    </Fragment>
  );
}

export default App;
