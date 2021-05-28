import { fetchAbsences } from "./fetchAdminAbsences"
import React, { Component } from 'react'
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { Link } from "react-router-dom";


class Absence extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            absences: []
        }
        this.loadData();
    }

    loadData() {
        fetchAbsences("609a93614f29bc1bbc6ea128").then((result) => {
            this.setState(
                {
                    absences: result.absences
                }
            )
        })
    }

    deleteAbsence = (id) => {
        if (window.confirm("Press a button!") === true) {
            //script to delete absence
        }

    }

    loadTable = () => {
        return this.state.absences.map((item) => {
            let date = new Date(item.dateabsence);
            let jour;
            if ((date.getMonth() + 1) < 10)
                jour = date.getDate() + '-0' + (date.getMonth() + 1) + '-' + date.getFullYear()
            let heuredebut;
            if (date.getMinutes() < 10)
                heuredebut = date.getHours() + ":0" + date.getMinutes() + ":" + date.getSeconds();
            else
                heuredebut = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            //destructuring
            const { _id, numinscription, nom, prenom, designation, annee, heurefin } = item 

            return (
                <tr key={_id}>
                    <td>{numinscription}</td>
                    <td>{nom}</td>
                    <td>{prenom}</td>
                    <td>{designation}</td>
                    <td>{annee}</td>
                    <td>{jour}</td>
                    <td>{heuredebut}</td>
                    <td>{heurefin}</td>
                    <td>
                        <button type="button" name={_id} id={_id} className="btn btn-warning">Modifier</button>
                        <button type="button" name={_id} id={_id} className="btn btn-danger" onClick={()=>this.deleteAbsence(_id)}>Supprimer</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <DashboardNavbar />
                        <h1>Liste des Absences</h1>
                        <div className="container">
                            <Link
                                to='/absences/create'
                                className="btn btn-primary btn-lg  mb-4">
                                Ajouter absence
                            </Link>
                        </div>
                        <table className="table">
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
                                    this.loadTable()
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Absence;
