//import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import MobileNavbar from './components/mobileNavbar/mobileNavbar';
import HomePage from './pages/homePage/homePage';
import ProfilePage from './pages/profilePage/profilePage';
import AboutPage from './pages/aboutPage/aboutPage';
import ExplorePage from './pages/explorePage/explorePage';
import SignUpSignInPage from './pages/signUpSignInPage/signUpSignInPage';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/explore' element={<ExplorePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/sign-in' element={<SignUpSignInPage />} />
    </Routes>
    </Router>
  );
}

export default App;

/*
<Router>
<Navbar/>
<Routes>
  <Route path='/' element={} />
  <Route path='/explore' element={<Explore/>} />
  <Route path='/about' element={<About/>} />
</Routes>
</Router>
*/