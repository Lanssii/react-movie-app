import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import MovieSection from "./Components/MovieSection/MovieSection.jsx";
import logo from "./assets/logo.png";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header
        imgLogo={logo}
        title="MovieExplorer"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MovieSection searchValue={searchValue} />
    </>
  );
}

export default App;
