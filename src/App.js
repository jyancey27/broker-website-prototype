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
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/houses' element={<Houses/>} />
        </Routes>
        <footer>
          <div className='bar'>
            <div>
              <p>Abegglen Realty LLC. © 2022 <a className="privacyPolicyLink" href='http://localhost:3000/about#privacypolicy'>Privacy Policy</a></p>
            </div>
          </div>
        </footer>
      </Router>
  );
}

export default App;
