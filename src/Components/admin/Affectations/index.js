import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getAllAffectations } from '../../../helpers/getAllAffectationsByAdmin';
import DashboardNavbar from "../Dashboard/DashboardNavbar";

const Affectations = () => {
    const [affectations, setaffectations] = useState([])
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        getAllAffectations("609a93614f29bc1bbc6ea128")
            .then((result) => {
                setaffectations(result.details)
            }).catch(err => {
                console.log(err);
            })
    }

    
    const loadTable = () => {
        return affectations.map((item) => {
            const { _id, formateur, groupe ,annee} = item
            return (
                <tr key={_id} >
                    <td> {formateur} </td>
                    <td> {groupe} </td>
                    <td> {annee} </td>
                    <td>
                        <Link
                            to={"/admin/affectations/" + _id + "/update"}
                            className="btn btn-warning"
                        >
                            Modifier
                        </Link>
                        <button type="button" className="btn btn-danger" >Supprimer</button>
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
                        <div className="container">
                        <h1>Liste des Affectations</h1>
                            <Link
                                to='/admin/affectations/create'
                                className="btn btn-primary btn-lg  mb-4">
                                Ajouter une affectation 
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" width="100%" cellSpacing={0}>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Formateur</th>
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
export default Affectations;