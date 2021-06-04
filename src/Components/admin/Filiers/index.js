import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { deleteFilierByAdmin } from '../../../helpers/Admin/Filiers/deleteFilierByAdmin';
import { getAllFiliers } from '../../../helpers/getAllFiliersByAdmin';
import DashboardNavbar from "../Dashboard/DashboardNavbar";

const Filiers = () => {
    const [filiers, setfiliers] = useState([])
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        getAllFiliers("609a93614f29bc1bbc6ea128")
            .then((result) => {
                setfiliers(result.details)
            }).catch(err => {
                console.log(err);
            })
    }

    const deleteFilier = (id_groupe) => {
        if (window.confirm("êtes-vous sûr de vouloir supprimer cette filier!") === true) {
            deleteFilierByAdmin("609a93614f29bc1bbc6ea128", id_groupe)
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
        return filiers.map((item) => {
            const { _id, designation, niveau } = item
            return (
                <tr key={_id} >
                    <td> {designation} </td>
                    <td> {niveau} </td>
                    <td>
                        <Link
                            to={"/admin/filiers/" + _id + "/update"}
                            className="btn btn-warning"
                        >
                            Modifier
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={() => deleteFilier(_id)}>Supprimer</button>
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
                        <h1>Liste des Filiers</h1>
                        <div className="container">
                            <Link
                                to='/admin/filiers/create'
                                className="btn btn-primary btn-lg  mb-4">
                                Ajouter un Filier
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" width="100%" cellSpacing={0}>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Designation</th>
                                            <th scope="col">Niveau</th>
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

export default Filiers;