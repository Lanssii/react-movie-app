import { useEffect, useState } from "react";
import "./MovieSection.css";
import MovieCard from "../MovieCard/MovieCard.jsx";

function MovieSection(props) {
  const key = "89b09e58";
  const page = 1;
  const url = `https://www.omdbapi.com/?apikey=${key}&s=${props.searchValue}&page=${page}`;

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!props.searchValue) return;

      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.Search);

        setMovieData(data.Search || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchMovies();
  }, [props.searchValue]);

  return (
    <>
      <section className="movie-section">
        <div className="movie-container container">
          <h3>Movies</h3>

          <div className="movie-list">
            {movieData.map((movie) => {
              return (
                <MovieCard
                  Poster={movie.Poster}
                  Title={movie.Title}
                  Year={movie.Year}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieSection;
