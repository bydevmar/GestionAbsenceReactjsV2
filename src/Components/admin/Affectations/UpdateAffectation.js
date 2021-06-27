import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import { useHistory, useParams } from 'react-router';
import { getAllGroupes } from '../../../helpers/groupes/getAllGroupes';
import { getAllFormateurs } from '../../../helpers/Formateur/getAllFormateurs';
import { putAffectationByAdmin} from '../../../helpers/Affectations/putAffectationByAdmin'
import { getAffectationByAdmin } from '../../../helpers/Affectations/getAffectationByAdmin';

const UpdateAffectation = ({user}) => {

    const [formateur, setformateur] = useState("");
    const [groupe, setgroupe ] = useState("");

    const [formateurs, setFormateurs ] = useState([]);
    const [groupes, setgroupes ] = useState([]);

    const {id_affectation} = useParams()
    
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
            setgroupes([]);
        })
        getAffectationByAdmin(user._id,id_affectation)
        .then(result =>{
            if(result.status === "OK"){
                const affectation = result.details;
                setformateur(affectation.idformateur)
                setgroupe(affectation.idgroupe)
            }
        })
        .catch(err => {
            console.log("error update affectation!");
        })
    }, [user._id,id_affectation])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("êtes-vous sûr de vouloir modifier cette affectation!") === true){
            putAffectationByAdmin(user._id,id_affectation, formateur , groupe)
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
                console.log("error lors de la modification de cette affectation!");
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
                                <h2 className="h2 pb-4">Modifier une affectation</h2>
                                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>

                                <div className="form-group ">
                                        <label htmlFor="formateur">Formateur :</label><br />
                                        <select
                                            id="formateur"
                                            className="form-control mb-3"
                                            value={formateur}
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
                                            value={groupe}
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

export default UpdateAffectation

