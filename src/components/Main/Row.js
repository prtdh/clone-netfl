import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row(props) {
  //gettin all the movies from API
  const [movies, setMovies] = useState([]);
  
  // getting trailer url
  const [trailerUrl,setTrailerUrl]=useState("");

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

  const opts={
    height:"400",
    width: "100%",
    playerVars:{
      autoplay:1,
    }
  };

  //Youtube Player


  const handleClick=(movie)=>{
    console.log(movie?.title); 


    // if player is already there. set trailer url to null
    // when click on the image, movieTrailer search movie name. if that empty if search the url use URLSEARCH
    //PARAMS class and search the url. and settrailerurl= get(v); 
    
    
    if(trailerUrl){
      setTrailerUrl("");
    }else {
      movieTrailer(movie?.title || "").then((url)=>{
        // https://www.youtube.com/watch?v=XtMThy8QKqU
        // 
        const urlParams= new URLSearchParams(new URL(url).search);
        
       setTrailerUrl(urlParams.get("v"));
      }).catch((error)=> console.log(error));
    
    }
    console.log(trailerUrl);
  };

  return (
    <div className="Row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img key={movie.id}
            // to play videos on clicking the image
            
          onClick={()=>handleClick(movie)}
            className={`row_poster ${props.isLargeRow && "row_poster_large"}` }
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="movie image"
          />
        ))}
      </div>
     {/* if trailer is present then only youtube players starts */}
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

    </div>
  );
}

export default Row;
