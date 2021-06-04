import React, { useEffect, useState } from 'react';
import DashboardNavbar from '../Dashboard/DashboardNavbar';
import { useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from 'react-router';
import { getNiveauByAdmin } from '../../../helpers/getNiveauByAdmin';
import { putNiveauByAdmin } from '../../../helpers/Admin/Niveaux/putNiveauByAdmin';

const UpdateNiveau = () => {
    const isLogged = useSelector(state => state.auth.isLogged);

    const [designation, setdesignation] = useState("");

    const {id_niveau} = useParams();
    
    const history = useHistory()

    useEffect(() => {
       getNiveauByAdmin("609a93614f29bc1bbc6ea128",id_niveau,designation)
        .then(result => {
            if(result.status === "OK"){
                setdesignation(result.details.designation)
            }
            console.log(result);
        }).catch(err=> {
            console.log(err);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm("êtes-vous sûr de vouloir midifier ce niveau!") === true){
            putNiveauByAdmin("609a93614f29bc1bbc6ea128",id_niveau, designation)
            .then(result => {
                if (result.status === "OK") {
                    console.log(result.message);
                    history.push("/admin/niveaux")
                }
                else{
                    console.log(result.message);
                }
            })
            .catch(err => {
                console.log("error lors de la modification de cette niveau!");
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
                                <h2 className="h2 pb-4">Modifier une niveau</h2>
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

export default UpdateNiveau

