import "./MovieCard.css";

function MovieCard(props) {
  const addFavorite = () => {
    const alreadyExists = props.favorites.some(
      (fav) => fav.imdbID === props.imdbID
    );
    if (alreadyExists) return;

    props.setFavorites((prev) => [...prev, props.imdbID]);
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
          ❤️ Add Favorites
        </button>
      </div>
    </>
  );
}

export default MovieCard;
