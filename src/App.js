import './App.css';
import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./views/home";
import Explore from "./views/explore";
import About from "./views/about";
import { render } from '@testing-library/react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Navbar />
    );
  }
}

export default App;