import "./MovieCard.css";

function MovieCard(props) {
  return (
    <>
      <div className="movie-card">
        <div className="image-container">
          <img src={props.Poster} alt="movie-image" />
        </div>
        <h3>{props.Title}</h3>
        <p className="movie-date">{props.Year}</p>
        <button className="favorites-btn">❤️ Add Favorites</button>
      </div>
    </>
  );
}

export default MovieCard;
