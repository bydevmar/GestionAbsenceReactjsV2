import React from 'react';
import { Route  , Switch} from 'react-router-dom'
import Login from "../Components/login"
import Home from "../Components/Home"
import Dashboard from '../Components/admin/Dashboard';
import Absences from '../Components/admin/Absences';
import AjouterAbsences from '../Components/admin/Absences/AjouterAbsence';
import UpdateAbsence from '../Components/admin/Absences/updateAbsence';
import Stagiaires from '../Components/admin/Stagiaires';
import AddStagiaire from '../Components/admin/Stagiaires/addStagiaire';

 function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/admin/dashboard" exact component={Dashboard} />
                <Route path="/admin/absences" exact component={Absences} />
                <Route path="/admin/absences/create" exact component={AjouterAbsences} />
                <Route path="/admin/absences/update" exact component={UpdateAbsence} />
                <Route path="/admin/stagiaires" exact component={Stagiaires} />
                <Route path="/admin/stagiaires/create" exact component={AddStagiaire} />
                <Route path="*" exact component={Home} />
            </Switch>
        </div>
    )
}
export default Routes