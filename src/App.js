import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/main.routes';
import Footer from "./Components/layouts/footer";
import Navbar from './Components/layouts/Navbar';
import { useSelector } from 'react-redux';

function App() {
  let user = useSelector(state => state.auth.user);
  return (
    <div >
        <Router>
          <Navbar user={user}/>
          <Routes/>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;