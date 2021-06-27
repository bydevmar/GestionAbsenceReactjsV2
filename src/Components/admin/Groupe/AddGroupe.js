import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { useHistory } from 'react-router'
import {postGroupe} from "../../../helpers/groupes/postGroupeByAdmin"
import { getAllFiliers } from '../../../helpers/Filiers/getAllFiliersByAdmin'

function AddGroupe({user}) {

    const [designation, setdesignation] = useState("");
    const [annee, setannee] = useState("");
    const [filier, setfilier ] = useState("");

    const [filiers, setfiliers ] = useState([]);
    
    const history = useHistory()

    useEffect(() => {
        getAllFiliers(user._id)
        .then(result =>{
            setfiliers(result.details)
        })
        .catch(err => {
            setfiliers([]);
        })
    }, [user._id])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("êtes-vous sûr de vouloir ajouter ce groupe!") === true){
            postGroupe(user._id, designation , annee , filier)
            .then(result => {
                if (result.status === "OK") {
                    console.log(result.message);
                    history.push("/admin/groupes")
                }
                else{
                    console.log(result.message);
                }
               
            })
            .catch(err => {
                console.log("error lors de l'ajout de ce groupe");
                console.log(err);
            })
        }
    }

    
    return (
        <div>
            <div>
                <DashboardNavbar />
                <div>
                    <div className="container mt-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2 className="h2 pb-4">Ajouter un Groupe</h2>
                                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>

                                    <div className="form-group">
                                        <label htmlFor="designation">Designation:</label><br />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="designation"
                                            onChange={(e) => setdesignation(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="annee">Annee:</label><br />
                                        <input
                                            className="form-control"
                                            type="number"
                                            min="1"
                                            max="3"
                                            id="annee"
                                            onChange={(e) => setannee(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group ">
                                        <label htmlFor="filier">Filier :</label><br />
                                        <select
                                            id="filier "
                                            className="form-control mb-3"
                                            onChange={(e) => setfilier(e.target.value)}
                                        >
                                            <option>Selectionner une filier</option>
                                            {
                                                filiers.map((item, index) => {
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

export default AddGroupe

