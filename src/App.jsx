import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import MovieSection from "./Components/MovieSection/MovieSection.jsx";
import FavoritesSection from "./Components/favoritesSection/favoritesSection.jsx";
import logo from "./assets/logo.png";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      <Header
        imgLogo={logo}
        title="MovieExplorer"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MovieSection
        searchValue={searchValue}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <FavoritesSection
        title="Favorites"
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}

export default App;
