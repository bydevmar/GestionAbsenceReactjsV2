import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { useSelector } from "react-redux"
import { Redirect } from 'react-router'
import { getAllStagiaires } from '../../../helpers/getAllStagiaires';
import { getAllFormateurs } from '../../../helpers/getAllFormateurs';
import { postAbsence } from '../../../helpers/Absences/postAbsence';
import { useHistory } from "react-router-dom";


function AddAbsence({user}) {
    const isLogged = useSelector(state => state.auth.isLogged);
    const [stagiaires, setstagiaires] = useState([]);
    const [formateurs, setformateurs] = useState([]);

    const [stagiaire, setstagiaire] = useState("");
    const [formateur, setformateur] = useState("");
    const [dateabsence, setdateabsence] = useState();
    const [heureDebut, setheureDebut] = useState();
    const [heureFin, setheureFin] = useState();

    const history = useHistory();

    useEffect(() => {
        getAllStagiaires(user._id)
            .then((result) => {
                setstagiaires(result.stagiaires)
            })

        getAllFormateurs()
            .then((result) => {
                setformateurs(result.formateurs)
            })

    }, [])

    const remplirComboStagiaires = () => {
        return stagiaires.map((item, index) => {
            return (
                <option value={item._id} key={index}>{item.nom + " " + item.prenom}</option>
            )
        })
    }

    const remplirComboformateurs = () => {
        return formateurs.map((item, index) => {
            return (
                <option value={item._id} key={index} >{item.nom + " " + item.prenom}</option>
            )
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postAbsence(user._id, stagiaire, formateur, dateabsence, heureDebut, heureFin)
            .then((result) => {
                if (result.status === "OK") {
                    history.push("/admin/absences")
                }
                else {
                    console.log(result.message);
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    if (!isLogged)
        return <Redirect to="/login" />
    return (
        <div>
            <div>
                <DashboardNavbar />
                <div>
                    <div className="container mt-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2 className="h2 pb-4">Ajouter une absence</h2>
                                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>

                                    <div className="form-group ">
                                        <label htmlFor="stagiaire">stagiaire :</label><br />
                                        <select
                                            className="form-select mb-3"
                                            aria-label="stagiaire"
                                            onChange={(e) => setstagiaire(e.target.value)}
                                        >
                                            <option>Selectionner stagiaire</option>
                                            {
                                                remplirComboStagiaires()
                                            }
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="formateur">formateur :</label><br />
                                        <select
                                            className="form-select mb-3"
                                            ria-label="formateur"
                                            onChange={(e) => setformateur(e.target.value)}
                                        >
                                            <option  >Selectionner formateur</option>
                                            {
                                                remplirComboformateurs()
                                            }
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="dateabsence">date absence :</label><br />
                                        <input type="date"
                                            onChange={(e) => setdateabsence(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="heuredebut">Heure debut :</label><br />
                                        <input type="time"
                                            min="08:00"
                                            max="18:30"
                                            onChange={(e) => setheureDebut(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="heurefin">Heure Fin :</label><br />
                                        <input type="time"
                                            min="08:00"
                                            max="18:30"
                                            onChange={(e) => setheureFin(e.target.value)} />
                                    </div>


                                    <div className="form-group justify-content-center">
                                        <input type="submit" className="btn btn-success form-control" value="Ajouter" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAbsence

