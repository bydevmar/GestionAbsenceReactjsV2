import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { getAllStagiaires } from '../../../helpers/getAllStagiaires';

const Stagiaires = () => {
    const [stagiaires, setStagiaires] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        getAllStagiaires("609a93614f29bc1bbc6ea128")
            .then((result) => {
                setStagiaires(result.stagiaires)
            })
    }

    const loadTable = () => {
        return stagiaires.map((stagiaire) => {
            //destructuring
            const { _id, numinscription, nom, prenom, nomgroupe, annee } = stagiaire
            return (
                <tr key={_id} >
                    <td> {numinscription} </td>
                    <td> {nom} </td>
                    <td> {prenom} </td>
                    <td> {nomgroupe} </td>
                    <td> {annee} </td>

                    <td>
                        <Link
                            to='/admin/stagiaires/update'
                            className="btn btn-warning"
                        >
                            Modifier
                        </Link>
                        <button type="button" className="btn btn-danger">Supprimer</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <DashboardNavbar />
                        <h1>Liste des Stagiaires</h1>
                        <div className="container">
                            <Link
                                to='/admin/stagiaires/create'
                                className="btn btn-primary btn-lg  mb-4">
                                Ajouter un Stagiaire
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" width="100%" cellSpacing={0}>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">N.I.</th>
                                            <th scope="col">Nom</th>
                                            <th scope="col">Prenom</th>
                                            <th scope="col">Groupe</th>
                                            <th scope="col">annee</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loadTable()
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stagiaires;