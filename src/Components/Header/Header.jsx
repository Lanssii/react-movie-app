import "./Header.css";

function Header(props) {
  console.log(props.searchValue);
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

        <button className="theme-btn">Dark Mode</button>
      </div>
    </header>
  );
}

export default Header;
