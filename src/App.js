import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/main.routes';
import Footer from "./Components/layouts/footer";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
          <Navbar/>
          <Routes/>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;