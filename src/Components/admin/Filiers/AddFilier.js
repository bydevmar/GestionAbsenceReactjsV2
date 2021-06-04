import React, { useEffect, useState } from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { useSelector } from "react-redux"
import { Redirect, useHistory } from 'react-router'
import {postGroupe} from "../../../helpers/Admin/groupes/postGroupeByAdmin"
import { getAllFiliers } from '../../../helpers/getAllFiliersByAdmin'
import { getAllNiveaux } from '../../../helpers/getAllNiveaux'
import { postFilierByAdmin } from '../../../helpers/Admin/Filiers/postFilierByAdmin'


function AddFilier() {
    const isLogged = useSelector(state => state.auth.isLogged);

    const [designation, setdesignation] = useState("");
    const [niveau, setniveau ] = useState("");

    const [niveaux, setniveaux ] = useState([]);
    
    const history = useHistory()

    useEffect(() => {
        getAllNiveaux("609a93614f29bc1bbc6ea128")
        .then(result =>{
            setniveaux(result)
        })

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("êtes-vous sûr de vouloir ajouter cette filier!") === true){
            postFilierByAdmin("609a93614f29bc1bbc6ea128", designation , niveau)
            .then(result => {
                if (result.status === "OK") {
                    console.log(result.message);
                    history.push("/admin/filiers")
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
                                <h2 className="h2 pb-4">Ajouter une filier</h2>
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
                                    <div className="form-group ">
                                        <label htmlFor="filier">Niveau :</label><br />
                                        <select
                                            id="filier "
                                            className="form-control mb-3"
                                            onChange={(e) => setniveau(e.target.value)}
                                        >
                                            <option>Selectionner un niveau</option>
                                            {
                                                niveaux.map((item, index) => {
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

export default AddFilier
