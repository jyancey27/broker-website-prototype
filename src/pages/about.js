
import React from 'react';
import robRealtor from '../images/robRealtor.jpg';
import hannahRealtor from '../images/hannahRealtor.jpg';
import jennyRealtor from '../images/jennyRealtor.jpg';
  
const About = () => {
  return (
    <div className='App'>
      <h1>Our Vision</h1>
      <p>We strive to make the best deals for our customers all while creating a healthy environment. We love competition and will do anything to get you the best possible price.</p> <br></br><br></br>
      <div>
        <h2>Meet the Brokers</h2> <br></br>
        <div>
          <h3 className='titleLeft'>Hannah</h3>
          <div className='leftAlign'>
            <p className='paragraph'>
            <img src={hannahRealtor} alt='Hannah' width="800" height="600" border="#555 black 2px"></img>
            <span className='textRight'>&emsp;&emsp;Hi there, I'm Hannah White and a licensed realtor in Oregon and Idaho. I have been licensed for over 3 years. I love getting to know new clinets on a personal level and providing the best service possible. I am passionate about outdoor activities such as golf, hiking, and fishing.</span>
            </p>
          </div>
        </div>
        <div>
          <h3 className='titleRight'>Jenny</h3>
          <div className='rightAlign'>
            <p className='paragraph'>
            <span className='textLeft'>&emsp;&emsp;Hello I'm Jenny Jefferson and have been a licensed realtor in Oregon for over 10 years. My goal is to find your dream home and make it a realtiy. I enjoy reading, going for walks in the mountains, and knitting. </span>
            <img src={jennyRealtor} alt='Jenny' width="800" height="600"></img>
            </p>
          </div>
        </div>
        <div>
          <h3 className='titleLeft'>Rob</h3>
          <div className='leftAlign'>
            <p className='paragraph'>
            <img src={robRealtor} alt='Rob' width="800" height="600"></img>
            <span className='textRight'>&emsp;&emsp;Howdy! My name is Rob Abegglen and I am the founder of Abegglen Realty LLC. and have been licensed for over 15 years. I take an agressive approach in getting you what you need as my client and take pride in the services I provide. I love to watch football, mountain biking, surfing, and golfing. </span>
            </p>
          </div>
        </div>
        <div> <br></br><br></br>
          <h3 className='titleLeft'><a href='#privacypolicy' id="privacypolicy"> </a>Privacy Policy</h3>
          <p className='leftAlign'>This privacy notice for Abegglen Realty Group, describes how and why we might collect, store, use, and/or share your information when you use our services, such as when you: 
          <ul>
          <li>Visit our website, or any website of ours that links to this privacy notice</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          <li>Enter any information for contacting (stored for 90 days)</li>
          </ul>
          If you have any questions or concerns, please contact us at AbegglenRealtyLLC@gmail.com.</p>
        </div><br></br><br></br><br></br>
      </div>
    </div>
  );
};
  
export default About;