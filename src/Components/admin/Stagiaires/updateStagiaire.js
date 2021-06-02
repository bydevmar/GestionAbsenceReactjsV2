import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { useSelector } from "react-redux"
import { Redirect } from 'react-router'
import { getAllGroupes } from '../../../helpers/getAllGroupes';
import { putStagiaireByAdmin } from '../../../helpers/Admin/Stagiaires/putStagiaireByAdmin';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {deleteStagiaireToUpdateAction} from '../../../actions/updateStagiaire.action'

 const UpdateStagiaire = () => {
    const isLogged = useSelector(state => state.auth.isLogged);
    const stagiaireToUpdate = useSelector(state => state.updateStagiaire.stagiaireToUpdate);

    const [numinscription, setnuminscription] = useState(stagiaireToUpdate.numinscription)
    const [nom, setnom] = useState(stagiaireToUpdate.nom)
    const [prenom, setprenom] = useState(stagiaireToUpdate.prenom)
    const [groupe, setgroupe] = useState(stagiaireToUpdate.idgroupe)

    const [groupes, setgroupes] = useState([]);

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        console.log("useEffect UpdateStagaires");
        if (!stagiaireToUpdate.numinscription)
            return history.push("/admin/stagiaires")
            
        getAllGroupes("609a93614f29bc1bbc6ea128")
            .then((result) => {
                setgroupes(result.groupes);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch abort!');
                    setgroupes([])
                }else{
                    console.log("updatestagiaires:getAllGroupes:Catch");
                }
            })
            return () => {
                console.log("unmounting");
                dispatch(deleteStagiaireToUpdateAction())
            }

    }, [] )

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("Press a button!") === true) {
            putStagiaireByAdmin(
                "609a93614f29bc1bbc6ea128",
                stagiaireToUpdate._id,
                numinscription,
                nom,
                prenom,
                groupe
            )
            .then(result => {
                console.log(result)
                history.goBack();
            })
            .catch(err => console.log(err))
        }
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
                                <h2 className="h2 pb-4">Modifier un Stagiaire</h2>
                                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>
                                    <div className="form-group">
                                        <label htmlFor="numins">Numero d'inscription :</label><br />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="numins"
                                            value={numinscription}
                                            onChange={(e) => setnuminscription(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nomstagiaire">Nom :</label><br />
                                        <input
                                            value={nom}
                                            className="form-control"
                                            type="text"
                                            id="nomstagiaire"
                                            onChange={(e) => setnom(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="prenomstagiaire">Prenom :</label><br />
                                        <input
                                            value={prenom}
                                            className="form-control"
                                            type="text"
                                            id="prenomstagiaire"
                                            onChange={(e) => setprenom(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group ">
                                        <label htmlFor="groupe">Groupe :</label><br />
                                        <select
                                            id="groupe"
                                            className="form-control mb-3"
                                            aria-label="stagiaire"
                                            value={groupe}
                                            onChange={(e) => setgroupe(e.target.value)}
                                        >
                                            <option>Selectionner un Groupe</option>
                                            {
                                                groupes.map((item, index) => {
                                                    return (
                                                        <option value={item._id} key={index}>{item.designation}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="form-group justify-content-center">
                                        <input type="submit" className="btn btn-success form-control" value="Modifier" />
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

export default UpdateStagiaire

