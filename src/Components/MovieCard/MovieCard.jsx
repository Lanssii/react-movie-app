import "./MovieCard.css";

function MovieCard(props) {
  const alreadyExists = props.favorites.some(
    (fav) => fav.imdbID === props.imdbID
  );

  const addFavorite = () => {
    if (alreadyExists) return;

    props.setFavorites((prev) => [
      ...prev,
      {
        imdbID: props.imdbID,
        Poster: props.Poster,
        Title: props.Title,
        Year: props.Year,
      },
    ]);
  };

  return (
    <>
      <div className="movie-card">
        <div className="image-container">
          <img src={props.Poster} alt="movie-image" />
        </div>
        <h3>{props.Title}</h3>
        <p className="movie-date">{props.Year}</p>
        <button onClick={addFavorite} className="favorites-btn">
          {alreadyExists ? "Remove" : "❤️ Add Favorites"}
        </button>
      </div>
    </>
  );
}

export default MovieCard;
