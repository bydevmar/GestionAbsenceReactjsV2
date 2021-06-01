import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { useSelector } from "react-redux"
import { Redirect } from 'react-router'
import { getAllGroupes } from '../../../helpers/getAllGroupes';

function AddStagiaire() {
    const isLogged = useSelector(state => state.auth.isLogged);
    const [numinscription, setnuminscription] = useState("")
    const [nom, setnom] = useState("")
    const [prenom, setprenom] = useState("")
    const [groupe, setgroupe] = useState([])

    const [groupes, setgroupes] = useState([]);

    useEffect(() => {
        getAllGroupes("609a93614f29bc1bbc6ea128")
            .then((result) => {
                setgroupes(result.groupes)
            })
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
                                <h2 className="h2 ">Ajouter un stagiaire</h2>
                                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>
                                    <div className="form-group">
                                        <label htmlFor="numins">Numero d'inscription :</label><br />
                                        <input 
                                            className="form-control"
                                            type="text"
                                            id="numins"
                                            onChange={(e) => setnuminscription(e.target.value)} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nomstagiaire">Nom :</label><br />
                                        <input 
                                            className="form-control"
                                            type="text"
                                            id="nomstagiaire"
                                            onChange={(e) => setnuminscription(e.target.value)} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="prenomstagiaire">Prenom :</label><br />
                                        <input 
                                            className="form-control"
                                            type="text"
                                            id="prenomstagiaire"
                                            onChange={(e) => setnuminscription(e.target.value)} 
                                        />
                                    </div>

                                    <div className="form-group ">
                                        <label htmlFor="groupe">Groupe :</label><br />
                                        <select
                                            id="groupe"
                                            className="form-control mb-3"
                                            aria-label="stagiaire"
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

export default AddStagiaire

