import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Axios from "axios";

function App() {
  //something like this
  /*state = {
    firstName: "",
    lastName: "",
    email: "",
    disabled: false
  }*/

  const postInfo = () => {
    const reqBody = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "email": this.state.email
    }

    Axios.post("http://localhost:3000/postInfo", reqBody).then(() => {
      console.log("Submitted")
    });
  }

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/annual' element={<AnnualReport/>} />
          <Route path='/team' element={<Teams/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
  );
}

export default App;
