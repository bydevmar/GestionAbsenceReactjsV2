import React, { useEffect, useState } from 'react';
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { getAllStagiaires } from '../../../helpers/getAllStagiaires';
import { getAllGroupes } from '../../../helpers/getAllGroupes';

const StagiairesFormateur = ({user}) => {
    const [stagiaires, setStagiaires] = useState([])
    const [groupes, setgroupes] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        getAllStagiaires(user._id)
            .then((result) => {
                setStagiaires(result.stagiaires)
            })
        getAllGroupes(user._id)
        .then((result) => {
            setgroupes(result.groupes);
        })
    }

    const setStagiaireGroupe = (group) => {
        if(group !== "Selectionner un Groupe"){
            getAllStagiaires(user._id)
            .then((result) => {
                setStagiaires(result.stagiaires.filter(stagiaire => stagiaire.idgroupe === group))
            })
        }else{
            getAllStagiaires(user._id)
            .then((result) => {
                setStagiaires(result.stagiaires)
            })
        }
    }

    const loadTable = () => {
        return stagiaires.map((stagiaire) => {
            //destructuring
            const { _id, numinscription, nom, prenom, nomgroupe, annee } = stagiaire
            return (
                <tr key={_id} >
                    <td> {numinscription} </td>
                    <td> {nom} </td>
                    <td> {prenom} </td>
                    <td> {nomgroupe} </td>
                    <td> {annee} </td>
                </tr>
            )
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <DashboardNavbar />
                        <div className="card-body">
                            <h1>Stagiaires</h1>
                            <div className="form-group ">
                                        <label htmlFor="groupe">Groupe :</label><br />
                                        <select
                                            id="groupe"
                                            className="form-control mb-3"
                                            aria-label="stagiaire"
                                            onChange={(e) => setStagiaireGroupe(e.target.value)}
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
                            <div className="table-responsive">
                                <table className="table table-bordered" width="100%" cellSpacing={0}>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">N.I.</th>
                                            <th scope="col">Nom</th>
                                            <th scope="col">Prenom</th>
                                            <th scope="col">Groupe</th>
                                            <th scope="col">annee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loadTable()
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StagiairesFormateur;