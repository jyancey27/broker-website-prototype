import React from "react";
import Popup from "../components/PopupComponent/Popup.js";
import { Slide } from "react-slideshow-image";
import { useState, useEffect } from 'react';
import "react-slideshow-image/dist/styles.css";
  
const Home = () => {

  // for the popup
  const [timedPopup, setTimedPopup] = useState(false);

  

  useEffect(() => {
    let pop_status = localStorage.getItem('pop_status');
    if(!pop_status){
      setTimeout(() =>{
        setTimedPopup(true);
      }, 1000);
      localStorage.setItem('pop_status',1);
    }
  }, []);


  // house images
  const slideImages = [
    "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  ];

  // moves the slideshow
  const properties = {
    duration: 4500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="App">
      <h1>Welcome to Abegglen Realty Group</h1>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})`}}>
              <div className="container">
                <div className="text-block">
                  <h4>Log Cabin</h4>
                  <p>
                    Size: 2 bed 1 bath <br />
                    Address: 1124 E Cabin Rd, Boise, ID <br />
                    Price: $250,000 
                  </p>
                  <a className="slideShowLink" href='https://jyancey27.github.io/broker-website-prototype/houses'>Go to</a>
                </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <div className="container">
                <div className="text-block">
                <h4>Gemsbok Alley</h4>
                  <p>
                    Size: 3 bed 2 bath <br />
                    Address: 2100 S Bannock St, Boise, ID <br />
                    Price: $500,000 
                  </p>
                  <a className="slideShowLink" href='https://jyancey27.github.io/broker-website-prototype/houses'>Go to</a>
                </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <div className="container">
                <div className="text-block">
                <h4>Desert Abode</h4>
                  <p>
                    Size: 5 bed 2.5 bath <br />
                    Address: 3521 N Sunrise Ct, Boise, ID <br />
                    Price: $1,000,000 
                  </p>
                  <a className="slideShowLink" href='https://jyancey27.github.io/broker-website-prototype/houses'>Go to</a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <br />
        <br />
      </div>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup} />
    </div>
  );
};

export default Home;