import Cookies from 'js-cookie';
import React from 'react';
import { Redirect } from 'react-router';
import DashboardNav from './DashboardNav';

const Dashboard = () => {
    if (!Boolean(Cookies.get("logged"))) return <Redirect to="/login" />
    return (
        <div>
            <DashboardNav/>
            <div className="sb-nav-fixed">
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4 mb-4">Absences</h1>
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-primary text-white mb-4">
                                        <div className="card-body">Primary Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="/">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-warning text-white mb-4">
                                        <div className="card-body">Warning Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="/">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-success text-white mb-4">
                                        <div className="card-body">Success Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="/">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-danger text-white mb-4">
                                        <div className="card-body">Danger Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="/">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-chart-area mr-1" />
                                            Area Chart Example
                                        </div>
                                        <div className="card-body"><canvas id="myAreaChart" width="100%" height={40} /></div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-chart-bar mr-1" />
                                            Bar Chart Example
                                        </div>
                                        <div className="card-body"><canvas id="myBarChart" width="100%" height={40} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-table mr-1" />
                                    Liste d'Absences
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                            <thead>
                                                <tr>
                                                    <th>Numero d'inscription</th>
                                                    <th>Nom</th>
                                                    <th>Prenom</th>
                                                    <th>Groupe</th>
                                                    <th>Jour d'absence</th>
                                                    <th>Heur Debut</th>
                                                    <th>Heure Fin</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>Numero d'inscription</th>
                                                    <th>Nom</th>
                                                    <th>Prenom</th>
                                                    <th>Groupe</th>
                                                    <th>Jour d'absence</th>
                                                    <th>Heur Debut</th>
                                                    <th>Heure Fin</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                <tr>
                                                    <th>A1234</th>
                                                    <th>BOUHLALI</th>
                                                    <th>Abdelfattah</th>
                                                    <th>TDI101</th>
                                                    <th>24/07/2021</th>
                                                    <th>14:00</th>
                                                    <th>18:00</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
