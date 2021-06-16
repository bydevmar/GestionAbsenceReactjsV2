import React from 'react'
import { Link } from 'react-router-dom';

const DashboardNavbar = ({user}) => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-faded">
        <a className="navbar-brand d-md-none" href="/admin/dashboard">DASHBOARD</a>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-md-flex d-block w-100">
          <div className="collapse navbar-collapse mx-auto w-auto justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to='/formateur/statistiques' 
                className="nav-item nav-link active border border-dark rounded mr-2">                                   
                Statistiques
              </Link>
              <Link
                to='/formateur/absences' 
                className="nav-item nav-link active border border-dark rounded mr-2">                                   
                Absences
              </Link>
              <Link
                to='/formateur/groupes' 
                className="nav-item nav-link active border border-dark rounded mr-2">                                   
                Groupes
              </Link>
              <Link
                to='/formateur/stagiaires' 
                className="nav-item nav-link active border border-dark rounded">                                   
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