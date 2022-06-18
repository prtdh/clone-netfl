import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './banner.css'
const Banner = () => {
     
    const [banner,setBanner]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6ab979f45bfff52505cff031005a0eb7")
            
            setBanner(
                request.data.results[Math.floor(Math.random() * request.data.results.length)]
            );
            
            

        }
        fetchData();
    },[])
    console.log(banner);

  return (
    <>
    <div className="banner"
    style={{
        backgroundImage:`url(https://image.tmdb.org/t/p/w500/${banner.backdrop_path})`,
        backgroundPosition:'top' ,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
    }}
    >
        <div className="banner-content">
            <h1>{banner?.title}</h1>

            <button>Play</button>
            <button>My List</button>
            <p>{banner.overview}</p>
        </div>
    </div>
    </>
  )
}

export default Banner