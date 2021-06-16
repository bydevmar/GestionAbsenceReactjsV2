import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { deleteNiveauByAdmin } from '../../../helpers/Admin/Niveaux/deleteNiveauByAdmin';
import { getAllNiveaux } from '../../../helpers/getAllNiveaux';
import DashboardNavbar from "../Dashboard/DashboardNavbar";

const Niveaux = ({user}) => {
    const [Niveaux, setNiveaux] = useState([])
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        getAllNiveaux(user._id)
            .then((niveaux) => {
                setNiveaux(niveaux)
            }).catch(err => {
                console.log(err);
            })
    }
    const deleteNiveau = (id_niveau) => {
        if (window.confirm("êtes-vous sûr de vouloir supprimer ce niveau!") === true) {
            deleteNiveauByAdmin(user._id, id_niveau)
                .then(result => {
                    if (result.status === "OK") {
                        console.log("supprmé avec succes");
                        loadData();
                    }
                    else {
                        console.log("error lors de la suppression!");
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    const loadTable = () => {
        return Niveaux.map((item) => {
            const { _id, designation} = item
            return (
                <tr key={_id} >
                    <td> {designation} </td>
                    <td>
                        <Link
                            to={"/admin/niveaux/" + _id + "/update"}
                            className="form-control btn btn-warning"
                        >
                            Modifier
                        </Link>
                        <button type="button" className="form-control btn btn-danger" onClick={() =>{deleteNiveau(_id)}}>Supprimer</button>
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
                        <h1>Liste des Niveaux</h1>
                        <div className="container">
                            <Link
                                to='/admin/niveaux/create'
                                className="btn btn-primary btn-lg  mb-4">
                                Ajouter un Niveau
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" width="100%" cellSpacing={0}>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Designation</th>
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

export default Niveaux;