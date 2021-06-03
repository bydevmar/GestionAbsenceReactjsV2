import React from 'react';
import { Route  , Switch} from 'react-router-dom'
import Login from "../Components/login"
import Home from "../Components/Home"
import Dashboard from '../Components/admin/Dashboard';
import Absences from '../Components/admin/Absences';
import AddAbsence from '../Components/admin/Absences/addAbsence';
import UpdateAbsence from '../Components/admin/Absences/updateAbsence';
import Stagiaires from '../Components/admin/Stagiaires';
import AddStagiaire from '../Components/admin/Stagiaires/addStagiaire';
import UpdateStagiaire from '../Components/admin/Stagiaires/updateStagiaire';
import Formateurs from '../Components/admin/Formateurs';
import AddFormateur from '../Components/admin/Formateurs/addFormateur';
import UpdateFormateur from '../Components/admin/Formateurs/updateFormateur';

 const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/admin/dashboard" exact component={Dashboard} />

                <Route path="/admin/absences" exact component={Absences} />
                <Route path="/admin/absences/create" exact component={AddAbsence} />
                <Route path="/admin/absences/update" exact component={UpdateAbsence} />

                <Route path="/admin/stagiaires" exact component={Stagiaires} />
                <Route path="/admin/stagiaires/create" exact component={AddStagiaire} />
                <Route path="/admin/stagiaires/update" exact component={UpdateStagiaire} />

                <Route path="/admin/formateurs" exact component={Formateurs} />
                <Route path="/admin/formateurs/create" exact component={AddFormateur} />
                <Route path="/admin/formateurs/:id_f/update" exact component={UpdateFormateur} />

                <Route path="*" exact component={Home} />
            </Switch>
        </div>
    )
}
export default Routes