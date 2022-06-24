import './App.css';
import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./pages/home";
import Explore from "./pages/explore";
import Showcase from "./pages/showcase";
import About from "./pages/about";
import { render } from '@testing-library/react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/showcase' element={<Showcase/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </Router>
    );
  }
}

export default App;