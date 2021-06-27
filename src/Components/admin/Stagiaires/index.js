import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { getAllStagiaires } from '../../../helpers/Stagiaires/getAllStagiaires';
import { deleteStagiaireByAdmin } from '../../../helpers/Stagiaires/deleteStagiaireByAdmin';

const Stagiaires = ({user}) => {
    const [stagiaires, setStagiaires] = useState([])
    const history = useHistory();

    useEffect(() => {
        getAllStagiaires(user._id)
            .then((result) => {
                setStagiaires(result.stagiaires)
            })
            .catch(err => {
                console.log(err);
            })
    }, [user._id])


    const deleteStagiaire = (id_stagiaire) => {
        if (window.confirm("êtes-vous sûr de vouloir supprimer ce stagiaire!") === true) {
            deleteStagiaireByAdmin(user._id, id_stagiaire)
                .then((resultat) => {
                    console.log(resultat.data.message);
                    history.push("/admin/stagiaires");
                })
                .catch((error) => {
                    console.log(error);
                })
        }
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
                            to={'/admin/stagiaires/'+_id+'/update'}
                            className="form-control btn btn-warning"
                        >
                            Modifier
                        </Link>
                        <button type="button" className="form-control btn btn-danger" onClick={() => deleteStagiaire(_id)}>Supprimer</button>
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