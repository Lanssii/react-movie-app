import "./App.css";
import Header from "./Components/Header/Header.jsx";
import MovieSection from "./Components/MovieSection/MovieSection.jsx";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <Header imgLogo={logo} title="MovieLab" />
      <MovieSection />
    </>
  );
}

export default App;
