//import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
//import MobileNavbar from './components/mobileNavbar/mobileNavbar';
import HomePage from './pages/homePage/homePage';
import ProfilePage from './pages/profilePage/profilePage';
import CustomAuthenticator from './pages/signUpSignInPage/signUpSignInPage';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/sign-in' element={<CustomAuthenticator />} />
    </Routes>
    </Router>
  );
}

export default App;