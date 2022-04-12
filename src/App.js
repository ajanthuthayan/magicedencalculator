import { Fragment } from "react";
import SearchBar from "./components/SearchBar";
import NFTImage from "./components/NFTImage";
import Details from "./components/Details";
import "./App.css";

function App() {
  return (
    <Fragment>
      <h1>Magic Eden Calculator</h1>
      <SearchBar />
      <NFTImage />
      <Details />
    </Fragment>
  );
}

export default App;
