import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { useSelector } from "react-redux"
import { Redirect, useHistory, useParams } from 'react-router'
import { getAllFiliers } from '../../../helpers/getAllFiliersByAdmin'
import { getGroupeByAdmin } from '../../../helpers/getGroupeByAdmin'
import { putGroupeByAdmin } from '../../../helpers/Admin/groupes/putGroupeByAdmin'

function UpdateGroupe() {
    const isLogged = useSelector(state => state.auth.isLogged);

    const [designation, setdesignation] = useState("");
    const [annee, setannee] = useState("");
    const [filier, setfilier ] = useState("");

    const [filiers, setfiliers ] = useState([]);
    
    const history = useHistory()
    const {id_g} = useParams();

    useEffect(() => {
        getAllFiliers("609a93614f29bc1bbc6ea128")
        .then(result =>{
            setfiliers(result.details)
        })
        getGroupeByAdmin("609a93614f29bc1bbc6ea128",id_g)
        .then(result =>{
            
            if(result.status === "OK"){
                const groupe = result.details
                setdesignation(groupe.designation);
                setannee(groupe.annee);
                setfilier(groupe.idfilier);
                console.log(result);
            }
            else{
                console.log("Update grupe error");
            }
        }).catch(err => {
            console.log(err);
        })
        return () => {
            console.log("cleanUP!");
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("êtes-vous sûr de vouloir modifier ce groupe!") === true){
            putGroupeByAdmin("609a93614f29bc1bbc6ea128",id_g, designation , annee , filier)
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
                                <h2 className="h2 pb-4">Ajouter un Groupe</h2>
                                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>

                                    <div className="form-group">
                                        <label htmlFor="designation">Designation:</label><br />
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="designation"
                                            value={designation}
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
                                            value={annee}
                                            onChange={(e) => setannee(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group ">
                                        <label htmlFor="filier">Filier :</label><br />
                                        <select
                                            id="filier "
                                            className="form-control mb-3"
                                            value={filier}
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

export default UpdateGroupe;
