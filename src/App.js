import React from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/login';
import Head from './Components/layouts/head';
import Footer from './Components/layouts/footer';


function App() {
  return (
    <div className="App">
        <Head/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
