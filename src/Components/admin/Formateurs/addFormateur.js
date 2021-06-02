import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { useSelector } from "react-redux"
import { Redirect } from 'react-router'
import { getAllStagiaires } from '../../../helpers/getAllStagiaires';
import { getAllFormateurs } from '../../../helpers/getAllFormateurs';
import { putAbsenceByAdmin } from '../../../helpers/Admin/Absences/putAbsenceByAdmin';
import { useHistory } from "react-router-dom";


function AddFormateur() {
    const isLogged = useSelector(state => state.auth.isLogged);
    const [email, setemail] = useState([]);

    const [nom, setnom] = useState("");
    const [prenom, setprenom] = useState("");
    const [matricule, setmatricule] = useState("");
    const [cin, setcin] = useState("");
    const [motdepasse, setmotdepasse] = useState("");
    const [confirmation, setconfirmation] = useState("");

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
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
                                <h2 className="h2 pb-4">Ajouter un formateur</h2>
                                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>

                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label><br />
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            onChange={(e) => setemail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nom">Nom:</label><br />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="nom"
                                            onChange={(e) => setnom(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="prenom">Prenom:</label><br />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="prenom"
                                            onChange={(e) => setprenom(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="matricule">Matricule:</label><br />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="matricule"
                                            onChange={(e) => setmatricule(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cin">CIN:</label><br />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="cin"
                                            onChange={(e) => setcin(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mdp">Mot de Passe:</label><br />
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="mdp"
                                            onChange={(e) => setmotdepasse(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmation">Confirmation:</label><br />
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="confirmation"
                                            onChange={(e) => setconfirmation(e.target.value)}
                                        />
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

export default AddFormateur

