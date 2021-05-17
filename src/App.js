import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/main.routes';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
