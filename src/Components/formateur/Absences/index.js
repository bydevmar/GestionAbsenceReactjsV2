import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { getAllAbsences } from "../../../helpers/Absences/getAllAbsences"
import { deleteAbsence } from "../../../helpers/Absences/deleteAbsence";
import { updateAbsenceAction } from '../../../actions/updateAbsence.action';
import { useDispatch } from "react-redux";
import moment from 'moment';

const AbsenceFormateur = ({user}) => {

    const dispatch = useDispatch();
    const [absences, setAbsences] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        getAllAbsences(user._id).then((result) => {
            setAbsences(result.absences);
        });
    }

    const deleteAbsences = (id_absence) => {
        if (window.confirm("êtes-vous sûr de vouloir supprimer cette absence!") === true) {
            deleteAbsence(user._id, id_absence)
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
                            to={"/formateur/absences/" + _id + "/update"}
                            className="form-control btn btn-warning"
                            onClick={() => { dispatch(updateAbsenceAction(item)) }}
                        >
                            Modifier
                        </Link>
                        <button type="button" className="form-control btn btn-danger" onClick={() => deleteAbsences(_id)}>Supprimer</button>
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
                        <div className="card-body">
                        <h1>Liste des Absences</h1>
                        <div className="container">
                            <Link
                                to="/formateur/absences/create"
                                className="btn btn-primary btn-lg  mb-4">
                                Ajouter absence
                            </Link>
                        </div>
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

export default AbsenceFormateur;