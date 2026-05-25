import { useEffect, useState } from "react";
import "./MovieSection.css";
import MovieCard from "../MovieCard/MovieCard.jsx";

function MovieSection(props) {
  const key = "89b09e58";

  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);

  // Reset page when search changes
  useEffect(() => {
    setPage(1);
  }, [props.searchValue]);

  // fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      if (!props.searchValue) return;

      const url = `https://www.omdbapi.com/?apikey=${key}&s=${props.searchValue}&page=${page}`;
      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.Search);

        setMovieData((prev) =>
          page === 1 ? data.Search || [] : [...prev, ...(data.Search || [])]
        );
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchMovies();
  }, [props.searchValue, page]);

  return (
    <>
      <section className="movie-section">
        <div className="movie-container container">
          <h2>Movies</h2>

          <div className="movie-list">
            {movieData.map((movie) => {
              return (
                <MovieCard
                  key={movie.imdbID}
                  imdbID={movie.imdbID}
                  Poster={movie.Poster}
                  Title={movie.Title}
                  Year={movie.Year}
                  favorites={props.favorites}
                  setFavorites={props.setFavorites}
                />
              );
            })}
          </div>
          {movieData.length > 0 && (
            <button
              className="load-more-btn"
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              Load More
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default MovieSection;
