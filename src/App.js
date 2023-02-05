import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Events from './pages/events';
import ContactUs from './pages/contactus';
import Houses from './pages/houses';

function App() {

  // removes the popup from local storage once page is refreshed or closed
  localStorage.removeItem('pop_status');

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/broker-website-prototype' exact element={<Home/>} />
          <Route path='/broker-website-prototype/about' element={<About/>} />
          <Route path='/broker-website-prototype/events' element={<Events/>} />
          <Route path='/broker-website-prototype/contactus' element={<ContactUs/>} />
          <Route path='/broker-website-prototype/houses' element={<Houses/>} />
        </Routes>
        <footer>
          <div className='bar'>
            <div>
              <p>Abegglen Realty LLC. © 2022 <a className="privacyPolicyLink" href='https://jyancey27.github.io/broker-website-prototype/'>Privacy Policy</a></p>
            </div>
          </div>
        </footer>
      </Router>
  );
}

export default App;
