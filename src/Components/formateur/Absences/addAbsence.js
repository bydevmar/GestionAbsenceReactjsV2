import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { getAllStagiaires } from '../../../helpers/Stagiaires/getAllStagiaires';
import { postAbsence } from '../../../helpers/Absences/postAbsence';
import { useHistory } from "react-router-dom";


function AddAbsenceFormateur({user}) {
    const [stagiaires, setStagiaires] = useState([]);

    const [stagiaire, setStagiaire] = useState("");
    const [dateabsence, setdateabsence] = useState();
    const [heureDebut, setHeureDebut] = useState();
    const [heureFin, setheureFin] = useState();

    const history = useHistory();

    useEffect(() => {
        getAllStagiaires(user._id)
            .then((result) => {
                setStagiaires(result.stagiaires)
            }).catch((err) => console.log(err));
    }, [user._id])

    const remplirComboStagiaires = () => {
        return stagiaires.map((item, index) => {
            return (
                <option value={item._id} key={index}>{item.nom + " " + item.prenom}</option>
            )
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postAbsence(user._id, stagiaire, user._id, dateabsence, heureDebut, heureFin)
            .then((result) => {
                if (result.status === "OK") {
                    history.push("/formateur/absences")
                }
                else {
                    console.log(result.message);
                }
            }).catch((err) => {
                console.log(err);
            })
    }

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
                                            className="form-control mb-3"
                                            aria-label="stagiaire"
                                            onChange={(e) => setStagiaire(e.target.value)}
                                        >
                                            <option>Selectionner stagiaire</option>
                                            {
                                                remplirComboStagiaires()
                                            }
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="dateabsence">date absence :</label><br />
                                        <input type="date"
                                            className="form-control"
                                            onChange={(e) => setdateabsence(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="heuredebut">Heure debut :</label><br />
                                        <input
                                            className="form-control" 
                                            type="time"
                                            min="08:00"
                                            max="18:30"
                                            onChange={(e) => setHeureDebut(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="heurefin">Heure Fin :</label><br />
                                        <input 
                                            className="form-control"
                                            type="time"
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

export default AddAbsenceFormateur;

