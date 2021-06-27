import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import { getAllGroupes } from '../../../helpers/groupes/getAllGroupes';
import { useHistory } from "react-router-dom";
import {postStagiaire} from '../../../helpers/Stagiaires/postStagiaire';

function AddStagiaire({user}) {
    const [numinscription, setnuminscription] = useState("")
    const [nom, setnom] = useState("")
    const [prenom, setprenom] = useState("")
    const [groupe, setgroupe] = useState([])

    const [groupes, setgroupes] = useState([]);

    let history = useHistory();

    useEffect(() => {
        getAllGroupes(user._id)
            .then((result) => {
                setgroupes(result.groupes);
            })
            .catch(function (error){
                setgroupes([])
            })
    }, [user._id])

    const handleSubmit = (e) => {
        e.preventDefault();
        postStagiaire(user._id,numinscription,nom,prenom,groupe)
        .then((result)=>{
            if(result.status === "OK"){
                console.log(result);
                history.push("/admin/stagiaires");
            }
        }).catch(err=>{
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
                                            onChange={(e) => setnom(e.target.value)} 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="prenomstagiaire">Prenom :</label><br />
                                        <input 
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

