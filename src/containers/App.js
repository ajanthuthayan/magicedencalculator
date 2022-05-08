import { Fragment, useState, useEffect, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import MainContent from "../components/MainContent";
import FeeDetails from "../components/FeeDetails";
import "./App.css";
import NFTImage from "../components/NFTImage";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";

function App() {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [salePrice, setSalePrice] = useState("");
  const [link, setLink] = useState("");
  const [details, setDetails] = useState({
    name: "",
    royaltyFee: "",
    imageLink: "",
    collectionName: "",
  });
  const [floorPrice, setFloorPrice] = useState();

  const fetchFloorPrice = useCallback(() => {
    const floorPriceDivisor = 1000000000;

    async function getFloorPrice() {
      const response = await fetch(
        `https://magicedencalculator-api.vercel.app/floor-price`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ collectionName: details.collectionName }),
        }
      );
      const data = await response.json();
      setFloorPrice(data.floorPrice / floorPriceDivisor);
    }
    getFloorPrice();
  }, [details.collectionName]);

  // Error Message, in case the API isn't responding or the mint address in the link is wrong
  useEffect(() => {
    if (details.royaltyFee === null) {
      setHasError(true);
      setErrorMessage("An Error Occured. Fix your link, or try again later.");
    }
    if (details.collectionName !== "") {
      fetchFloorPrice();
    }
  }, [details, fetchFloorPrice]);

  const onLinkChange = (event) => {
    setLink(event.target.value);
  };

  const onSearch = (event) => {
    // Input validation to check on client side if url contains root link
    setIsLoading(true);

    if (link.includes("https://magiceden.io/item-details/")) {
      setHasError(false);
      setErrorMessage("");
      fetch("https://magicedencalculator-api.vercel.app/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ magicEdenLink: link }),
      })
        .then((response) => response.json())
        .then((nftDetails) => {
          setIsLoading(false);
          setDetails(Object.assign({}, nftDetails, { floorPrice: "" }));
        })
        .catch((error) =>
          console.log("An error has occurred with the initial request")
        );
    } else {
      setHasError(true);
      setErrorMessage(
        "Please enter a valid link! Make sure it starts with https://magiceden.io/item-details/"
      );
      setIsLoading(false);
    }
  };

  const getSalePrice = (value) => {
    setSalePrice(value);
  };

  return (
    <Fragment>
      <h1>Magic Eden Calculator</h1>
      {/* Disables the search button when isLoading is true to prevent additional requests */}
      <SearchBar
        onLinkChange={onLinkChange}
        onSearch={onSearch}
        disabled={isLoading}
      />
      {hasError && <ErrorMessage errorMessage={errorMessage} />}
      {isLoading && <LoadingSpinner />}
      <MainContent>
        <NFTImage
          imageLink={details.imageLink}
          name={details.name}
          salePrice={getSalePrice}
          floorPrice={floorPrice}
        />
        <FeeDetails royaltyFee={details.royaltyFee} salePrice={salePrice} />
      </MainContent>
      <Footer />
    </Fragment>
  );
}

export default App;
