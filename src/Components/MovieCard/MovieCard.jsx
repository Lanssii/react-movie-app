import "./MovieCard.css";

function MovieCard(props) {
  const alreadyExists = props.favorites.some(
    (fav) => fav.imdbID === props.imdbID
  );

  const toggleFavorite = () => {
    if (alreadyExists) {
      // Remove from favorites
      props.setFavorites((prev) =>
        prev.filter((movie) => movie.imdbID !== props.imdbID)
      );
    } else {
      // Add to favorites
      props.setFavorites((prev) => [
        ...prev,
        {
          imdbID: props.imdbID,
          Poster: props.Poster,
          Title: props.Title,
          Year: props.Year,
        },
      ]);
    }
  };

  return (
    <div className="movie-card">
      <div className="image-container">
        <img src={props.Poster} alt="movie-image" />
      </div>

      <h3>{props.Title}</h3>
      <p className="movie-date">{props.Year}</p>

      <button onClick={toggleFavorite} className="favorites-btn">
        {alreadyExists ? "Remove" : "❤️ Add Favorites"}
      </button>
    </div>
  );
}

export default MovieCard;
