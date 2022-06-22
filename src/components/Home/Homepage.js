import React from "react";
import "./Homepage.css";
import Button from "../Button";
import Homecard from "./Homecard";
import {Link} from 'react-router-dom';


const Homepage = () => {
  return (
    <>
      <div className="home-data">
          <div className="home-data-top">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix"/>
            
            <Link to="/signin">
            <button className="btn btn-danger">Sign in</button>
        
 </Link>
          </div>
          <div className="home-data-center">
            <h1> Unlimited movies, TV</h1>
              <h1> shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <input type="email" name="email" id="email" placeholder="Email Address"/>

          <Link to="/register">
            <button className="btn btn-danger">GET STARTED {'>'} </button>

          </Link>

          </div>
      </div>

        <Homecard title="Enjoy on your TV." description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" side="right" />
        <Homecard title="Download your shows to watch offline." description="Save your favourites easily and always have something to watch." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" side="left" />
        <Homecard title="Watch everywhere." description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" side="right" />
        <Homecard title="Create profiles for children." description="Send children on adventures with their favourite characters in a space made just for them—free with your membership." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" side="left" />
    </>
  );
};

export default Homepage;
