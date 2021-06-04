import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import { useSelector } from "react-redux";
import { Redirect, useHistory } from 'react-router';
import { getAllGroupes } from '../../../helpers/getAllGroupes';
import { getAllFormateurs } from '../../../helpers/getAllFormateurs';
import {postAffectation} from '../../../helpers/Admin/Affectations/postAffectationByAdmin'


const AddAffectation = () => {
    const isLogged = useSelector(state => state.auth.isLogged);

    const [formateur, setformateur] = useState("");
    const [groupe, setgroupe ] = useState("");

    const [formateurs, setformateurs ] = useState([]);
    const [groupes, setgroupes ] = useState([]);
    
    const history = useHistory()

    useEffect(() => {
        getAllFormateurs("609a93614f29bc1bbc6ea128")
        .then(result =>{
            setformateurs(result.formateurs);
        })
        getAllGroupes("609a93614f29bc1bbc6ea128")
        .then(result =>{
            setgroupes(result.groupes)
        })

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("êtes-vous sûr de vouloir ajouter cette affectation!") === true){
            postAffectation("609a93614f29bc1bbc6ea128",formateur , groupe)
            .then(result => {
                if (result.status === "OK") {
                    console.log(result.message);
                    history.push("/admin/affectations")
                }
                else{
                    console.log(result.message);
                }
            })
            .catch(err => {
                console.log("error lors de l'ajout de cette filier!");
                console.log(err);
            })
        }
    }

    if (!isLogged)
        return <Redirect to="/login"/>
    return (
        <div>
            <div>
                <DashboardNavbar />
                <div>
                    <div className="container mt-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2 className="h2 pb-4">Ajouter une affectation</h2>
                                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>

                                <div className="form-group ">
                                        <label htmlFor="formateur">Formateur :</label><br />
                                        <select
                                            id="formateur"
                                            className="form-control mb-3"
                                            onChange={(e) => setformateur(e.target.value)}
                                        >
                                            <option>Selectionner un Formateur</option>
                                            {
                                                formateurs.map((item, index) => {
                                                    return (
                                                        <option value={item._id} key={index}>{item.nom +" " + item.prenom}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group ">
                                        <label htmlFor="groupe">Groupe :</label><br />
                                        <select
                                            id="groupe"
                                            className="form-control mb-3"
                                            onChange={(e) => setgroupe(e.target.value)}
                                        >
                                            <option>Selectionner un groupe</option>
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

export default AddAffectation

