import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { getAllAbsencesByAdmin } from "../../../helpers/Admin/Absences/getAllAbsencesByAdmin"
import { deleteAbsenceByAdmin } from "../../../helpers/Admin/Absences/deleteAbsenceByAdmin";
import { updateAbsenceAction } from '../../../actions/updateAbsence.action';
import { useDispatch } from "react-redux";
import moment from 'moment';

const Absence = () => {

    const dispatch = useDispatch();
    const [absences, setAbsences] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        getAllAbsencesByAdmin("609a93614f29bc1bbc6ea128").then((result) => {
            setAbsences(result.absences);
        });
    }

    const deleteAbsence = (id_absence) => {
        if (window.confirm("êtes-vous sûr de vouloir supprimer cette absence!") === true) {
            deleteAbsenceByAdmin("609a93614f29bc1bbc6ea128", id_absence)
                .then((resultat) => {
                    console.log(resultat.data.message);
                    loadData();
                })
                .catch((error) => {
                    console.log(error.data.message);
                })
        }
    }

    const loadTable = () => {
        return absences.map((item) => {
            //destructuring
            const { _id, numinscription, nom, prenom, designation, annee, dateabsence, heuredebut, heurefin } = item
            return (
                <tr key={_id} >
                    <td> {numinscription} </td>
                    <td> {nom} </td>
                    <td> {prenom} </td>
                    <td> {designation} </td>
                    <td> {annee} </td>
                    <td> {moment(dateabsence).format("YYYY-MM-DD")} </td>
                    <td> {moment(heuredebut).format("HH:mm")} </td>
                    <td> {moment(heurefin).format("HH:mm")}</td>
                    <td>
                        <Link
                            to='/admin/absences/update'
                            className="form-control btn btn-warning"
                            onClick={() => { dispatch(updateAbsenceAction(item)) }}
                        >
                            Modifier
                        </Link>
                        <button type="button" className="form-control btn btn-danger" onClick={() => deleteAbsence(_id)}>Supprimer</button>
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
                        <h1>Liste des Absences</h1>
                        <div className="container">
                            <Link
                                to='/admin/absences/create'
                                className="btn btn-primary btn-lg  mb-4">
                                Ajouter absence
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
                                            <th scope="col">Jour d'absence</th>
                                            <th scope="col">Heur Debut</th>
                                            <th scope="col">Heure Fin</th>
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

export default Absence;