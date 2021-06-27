import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { getAllGroupes } from '../../../helpers/groupes/getAllGroupes';
import { deleteGroupeByAdmin } from '../../../helpers/groupes/deleteGroupeByAdmin';

const Groupes = ({user}) => {
    const [groupes, setgroupes] = useState([])
    const history = useHistory();
    useEffect(() => {
        getAllGroupes(user._id)
            .then((result) => {
                setgroupes(result.groupes);
            })
            .catch(err => {
                setgroupes([])
            })
    }, [user._id])

    const deleteGroupe = (id_groupe) => {
        if (window.confirm("êtes-vous sûr de vouloir supprimer ce groupe!") === true) {
            deleteGroupeByAdmin(user._id, id_groupe)
                .then(result => {
                    if (result.status === "OK") {
                        console.log("supprmé avec succes");
                        history.push("/admin/groupes");
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
        return groupes.map((item) => {
            const { _id, designation, annee, filier } = item
            return (
                <tr key={_id} >
                    <td> {designation} </td>
                    <td> {annee} </td>
                    <td> {filier} </td>
                    <td>
                        <Link
                            to={"/admin/groupes/" + _id + "/update"}
                            className="btn btn-warning"
                        >
                            Modifier
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={() => { deleteGroupe(_id) }}>Supprimer</button>
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
                        <h1>Liste des Groupes</h1>
                        <div className="container">
                            <Link
                                to='/admin/groupes/create'
                                className="btn btn-primary btn-lg  mb-4">
                                Ajouter un groupe
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" width="100%" cellSpacing={0}>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Designation</th>
                                            <th scope="col">Annee</th>
                                            <th scope="col">Filier</th>
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

export default Groupes;