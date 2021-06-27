import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import { useHistory } from 'react-router';
import { getAllGroupes } from '../../../helpers/groupes/getAllGroupes';
import { getAllFormateurs } from '../../../helpers/Formateur/getAllFormateurs';
import { postAffectation } from '../../../helpers/Affectations/postAffectationByAdmin'

const AddAffectation = ({user}) => {

    const [formateur, setformateur] = useState("");
    const [groupe, setgroupe ] = useState("");

    const [formateurs, setFormateurs ] = useState([]);
    const [groupes, setgroupes ] = useState([]);
    
    const history = useHistory()

    useEffect(() => {
        getAllFormateurs(user._id)
        .then(result =>{
            setFormateurs(result.formateurs);
        })
        .catch(err => {
            setFormateurs([])
        })
        getAllGroupes(user._id)
        .then(result =>{
            setgroupes(result.groupes)
        })
        .catch(err => {
            setgroupes([])
        })

    }, [user._id])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("êtes-vous sûr de vouloir ajouter cette affectation!") === true){
            postAffectation(user._id,formateur , groupe)
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

