import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './banner.css'
const Banner = () => {
     
    const [banner,setBanner]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=eb0a6e630d45a3def28499f82281f204")
            
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
        // backgroundImage:`url(https://image.tmdb.org/t/p/w500/${banner.backdrop_path})`,
            backgroundImage: `url(https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeBe75-BjW-SVkahEzC0V1NtWhffTvqJ-ZH735569xOIMhso4TKiYXw068wvDbcJ5uP6lHkilc0BXiXo_Ywtc6ZqMiBsgIhm2yNe.webp?r=c7f)`,
        backgroundPosition:'top' ,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
    }}
    >
        <div className="banner-content">
      {/* <h1>{banner?.title}</h1> */}
            <div className="bannertitle"> <img src="https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABQq3OM0Hr6sxmJwEPBpbHc_NpxtMqIdaMSzu5yIeu5LVh-r2XebI1i2p0bxuYggCqKC0PreznJkGpJguUEO87eg1VotoZpg-UR1Q-tFJIg.webp?r=1a1" alt="" /></div>
            <button>Play</button>
            <button className='list'>My List</button>
            {/* <p>{banner.overview}</p> */}
            <p className='bannerOverview'>With a bloodthirsty enemy on a quest for revenge, Bella must reconcile her love for vampire Edward and her growing feelings for werewolf Jacob.</p>
        </div>
    </div>
    </>
  )
}

export default Banner