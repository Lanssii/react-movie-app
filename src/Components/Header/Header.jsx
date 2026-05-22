import { useEffect, useState } from "react";
import "./Header.css";

function Header(props) {
  console.log(props.searchValue);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "true";
  });

  const themeToggle = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (theme) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <header>
      <div className="header-container container">
        <div className="header-logo">
          <img src={props.imgLogo} alt="header-logo" className="logo-img" />
          <h2 className="logo-title">{props.title}</h2>
        </div>

        <div className="search-container">
          <input
            type="search"
            id="search-bar"
            placeholder="Search movies..."
            aria-label="Search movies"
            value={props.searchValue}
            onChange={(e) => {
              props.setSearchValue(e.target.value);
            }}
          />
        </div>

        <button className="theme-btn" onClick={themeToggle}>
          Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
