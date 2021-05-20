import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/main.routes';
import Footer from "./Components/layouts/footer";
import Navbar from './Components/layouts/Navbar';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes/>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;