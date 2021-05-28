import React from 'react'
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-faded">
        <a className="navbar-brand d-md-none" href="/dashboard">DASHBOARD</a>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-md-flex d-block w-100">
          <div className="collapse navbar-collapse mx-auto w-auto justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to='/statistiques' 
                className="nav-item nav-link active">                                   
                Statistiques
              </Link>
              <Link
                to='/absences' 
                className="nav-item nav-link active">                                   
                Absences
              </Link>
              <Link
                to='/formateurs' 
                className="nav-item nav-link active">                                   
                Formateurs
              </Link>
              <Link
                to='/groupes' 
                className="nav-item nav-link active">                                   
                Groupes
              </Link>
              <Link
                to='/filiers' 
                className="nav-item nav-link active">                                   
                Filiers
              </Link>
              <Link
                to='/niveau' 
                className="nav-item nav-link active">                                   
                Niveaux
              </Link>
              <Link
                to='/affectations' 
                className="nav-item nav-link active">                                   
                Affectations
              </Link>
              <Link
                to='/stagiaires' 
                className="nav-item nav-link active">                                   
                Stagiaires
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DashboardNavbar;