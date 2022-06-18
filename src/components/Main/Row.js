import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";

function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      //   setMovies(request.data.results);
      setMovies((prevState) => {
        const newState = request.data.results;
        return [...prevState, ...newState];
      });
      return request;
    }
    console.log(movies);

    fetchData();
  }, []);

  return (
    <div className="Row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img key={movie.id}
            className={`row_poster ${props.isLargeRow && "row_poster_large"}` }
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="movie image"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
