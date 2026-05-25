import "./FavoritesSection.css";
import MovieCard from "../MovieCard/MovieCard.jsx";

function FavoritesSection(props) {
  return (
    <>
      <section className="favorites-section">
        <div className="favorites-container container">
          <h2>{props.title}</h2>
          {props.favorites.length === 0 ? (
            <p className="favorites-info">No favorites added</p>
          ) : (
            <div className="favorites-list">
              {props.favorites.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  imdbID={movie.imdbID}
                  Poster={movie.Poster}
                  Title={movie.Title}
                  Year={movie.Year}
                  favorites={props.favorites}
                  setFavorites={props.setFavorites}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default FavoritesSection;
