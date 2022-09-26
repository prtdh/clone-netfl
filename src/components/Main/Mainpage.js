import React, { useState } from "react";
import axios from "axios";
import './Mainpage.css';
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";

// movie/popular?api_key=6ab979f45bfff52505cff031005a0eb7`


function Mainpage() {
  // const [movielist, setMovieList] = useState([]);

  // function updateList() {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=6ab979f45bfff52505cff031005a0eb7`
  //     )
  //     .then((res) => {
  //       console.log(movielist);
  //       setMovieList((prevState) => {
  //         const newState = res.data.results;
  //         return [...prevState, ...newState];
  //       });
  //     });
  // }

  return (
    <div>
        <Banner/>
      <Row title="Netflix Orginials" fetchUrl="https://api.themoviedb.org/3/movie/popular?api_key=6ab979f45bfff52505cff031005a0eb7" isLargeRow/>
      <Row title="Trending" fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=6ab979f45bfff52505cff031005a0eb7" />
      <Row title="Top-Rated" fetchUrl="https://api.themoviedb.org/3/movie/upcoming?api_key=6ab979f45bfff52505cff031005a0eb7" />
      <Row title="Upcoming" fetchUrl="https://api.themoviedb.org/3/movie/upcoming?api_key=6ab979f45bfff52505cff031005a0eb7" />
      <Row title="Netflix Orginials" fetchUrl="https://api.themoviedb.org/3/movie/popular?api_key=6ab979f45bfff52505cff031005a0eb7" />
      <Row title="Netflix Orginials" fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=6ab979f45bfff52505cff031005a0eb7" />
      <Row title="Netflix Orginials" fetchUrl="https://api.themoviedb.org/3/movie/popular?api_key=6ab979f45bfff52505cff031005a0eb7" />
      <Row title="Netflix Orginials" fetchUrl="https://api.themoviedb.org/3/movie/upcoming?api_key=6ab979f45bfff52505cff031005a0eb7" />

      {/* <button className="btn btn-danger" onClick={updateList}>
        Update List
      </button>
      <div className="movie-contain">

             {movielist.map((movie) => (
        <div className="movie-card" key={movie.id}>
              <h1> {movie.original_title}</h1>

           <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="image" />
        </div>
      ))}
    
      </div> */}
     </div>
  );
}

export default Mainpage;
