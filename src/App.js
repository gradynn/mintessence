import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from './components/navbar/navbar';
import MobileNavbar from './components/mobileNavbar/mobileNavbar';
import HomeView from "./views/homeView";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <MobileNavbar />
        <section id="homeView">
          <HomeView />
        </section>
        <section id="explore">
          Explore
        </section>
        <section id="about">
          About
        </section>
      </>
    );
  }
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